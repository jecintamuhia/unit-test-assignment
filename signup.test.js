// import { submitForm } from './signup.js';
// import{validateEmail} from './signup.js';
const {validateEmail,submitForm} =require("./signup");
describe("validateEmail",()=>{
    it('',()=>{
        expect(validateEmail("jecinta@gmail.com")).toBe(true);
    });
    it('',()=>{
        expect(validateEmail("jess")).toBe(false);
        expect(validateEmail("jess@gmail")).toBe(false);
        expect(validateEmail('jess@.com')).toBe(false);
    })
});
describe("submitForm", () => {
    it("", async () => {
        global.fetch = jest.fn().mockImplementation(() =>
            Promise.resolve({
                ok: true,
                json: () => Promise.resolve({ message: "Success" }),
            })
        );
    const response = await submitForm("jecinta@gmail.com", "password");
    expect(response.message).toBe("Success");
    expect(fetch).toHaveBeenCalledTimes(1);
    });
    it("", async () => {
        await expect(submitForm("invalid email", "password")).rejects.toThrow("Invalid email format");
    });
    it("", async () => {
        global.fetch = jest.fn().mockImplementation(() =>
            Promise.resolve({
                ok: false,
                statusText: "Server error",
            })
        );
        await expect(submitForm("email@gmail.com", "password")).rejects.toThrow("Signup failed");
    });
});
