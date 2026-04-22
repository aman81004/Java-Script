const accountId = 144553;
let accountName = "testAccount";
let accountBalance = "1000.50"; // Changed from var to let
const accountCity = "New York";

// accountId = 200; // ❌ Error: Cannot reassign a constant

accountName = "updatedAccount"; // ✅ Allowed
accountBalance = "1200.75";     // ✅ Allowed
// accountCity = "Los Angeles"; // ❌ Error: Cannot reassign a constant

/*
✅ Best Practices:
- Use 'let' for variables that may change
- Use 'const' for values that should not be reassigned
- Avoid 'var' due to function scoping issues
*/

console.table([accountId, accountName, accountBalance, accountCity]);