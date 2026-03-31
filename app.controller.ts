import {
  Body,
  Controller,
  Post,
  Get,
  Query,
  Res,
  HttpStatus,
} from "@nestjs/common";
import { exec } from "child_process";
import { Response } from "express";

@Controller()
export class AppController {
  // VULNERABILITY 1: Command Injection
  // TEST: GET /lookup?domain=google.com;cat /etc/passwd
  @Get("/lookup")
  lookup(@Query("domain") domain: string, @Res() res: Response) {
    // BAD: Directly interpolating user input into a shell command
    exec(`nslookup ${domain}`, (err: any, stdout: any, stderr: any) => {
      if (err) {
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(stderr);
        return;
      }
      res.send(stdout);
    });
  }

  // VULNERABILITY 2: Dangerous Use of Eval
  // TEST: POST {"code": "process.exit()"}
  @Post("/calculate")
  calculate(@Body("code") userInput: string, @Res() res: Response) {
    try {
      // BAD: eval() executes any string as JavaScript
      const result = eval(userInput);
      res.send({ result });
    } catch (e) {
      res.status(HttpStatus.BAD_REQUEST).send("Error executing code");
    }
  }
}
