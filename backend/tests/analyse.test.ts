import app from "../src/app";
// @ts-ignore
import request from "supertest";



test("sample", async () => {
    const response = await request(app).post("/analyse/").send().expect(200);
    expect(response.body).toEqual({res: "hello"});
});