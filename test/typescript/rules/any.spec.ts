import Validator from "../../../";

const v = new Validator();

describe('TypeScript Definitions', () => {
	describe("Test rule: any", () => {
		describe("old case (without considerNullAsAValue flag)", () => {
			const v = new Validator();
	
			it("should give back true anyway", () => {
				const check = v.compile({ $$root: true, type: "any" });
	
				expect(check(null)).toEqual([{ type: "required", actual: null, message: "The '' field is required." }]);
				expect(check(undefined)).toEqual([{ type: "required", actual: undefined, message: "The '' field is required." }]);
				expect(check(0)).toEqual(true);
				expect(check(1)).toEqual(true);
				expect(check("")).toEqual(true);
				expect(check("true")).toEqual(true);
				expect(check("false")).toEqual(true);
				expect(check([])).toEqual(true);
				expect(check({})).toEqual(true);
			});
	
			it("should give back true anyway as optional", () => {
				const check = v.compile({ $$root: true, type: "any", optional: true });
	
				expect(check(null)).toEqual(true);
				expect(check(undefined)).toEqual(true);
				expect(check(0)).toEqual(true);
				expect(check(1)).toEqual(true);
				expect(check("")).toEqual(true);
				expect(check("true")).toEqual(true);
				expect(check("false")).toEqual(true);
				expect(check([])).toEqual(true);
				expect(check({})).toEqual(true);
			});
		});
	
		describe("with considerNullAsAValue flag set to true", () => {
			const v = new Validator({considerNullAsAValue: true});
		
			it("should give back true anyway", () => {
				const check = v.compile({ $$root: true, type: "any" });
		
				expect(check(null)).toEqual(true);
				expect(check(undefined)).toEqual([{ type: "required", actual: undefined, message: "The '' field is required." }]);
				expect(check(0)).toEqual(true);
				expect(check(1)).toEqual(true);
				expect(check("")).toEqual(true);
				expect(check("true")).toEqual(true);
				expect(check("false")).toEqual(true);
				expect(check([])).toEqual(true);
				expect(check({})).toEqual(true);
			});
		
			it("should give back true anyway as optional", () => {
				const check = v.compile({ $$root: true, type: "any", optional: true });
		
				expect(check(null)).toEqual(true);
				expect(check(undefined)).toEqual(true);
				expect(check(0)).toEqual(true);
				expect(check(1)).toEqual(true);
				expect(check("")).toEqual(true);
				expect(check("true")).toEqual(true);
				expect(check("false")).toEqual(true);
				expect(check([])).toEqual(true);
				expect(check({})).toEqual(true);
			});
		});
	});
});
