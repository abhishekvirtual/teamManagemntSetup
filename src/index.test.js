import {expect} from "chai";
import { describe } from "mocha";
import jsdom from 'jsdom';
import fs from 'fs';

describe("Our first test",()=>{
 it("should pass",()=>{
  expect(true).to.equal(true);
 });
});

describe("index.html",()=>{
 it('should sy hello',()=>{
  const index  = fs.readFileSync('./src/index.html',"utf-8");
 })
});

