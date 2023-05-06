"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const Signup_btn = document.querySelector(".Signup");
Signup_btn.addEventListener("click", onSignup);
function onSignup() {
    return __awaiter(this, void 0, void 0, function* () {
        let dbFetchResponseOnSignup = yield fetch("http://localhost:3000/users");
        let userDetailsFromDb = dbFetchResponseOnSignup.json();
    });
}
