// Retrieve Elements
const consoleLogs = document.querySelector('.console-logs');
const runCodeBtn = document.querySelector('.run');
const resetCodeBtn = document.querySelector('.reset');

//Setup Ace
let editor = ace.edit("coder");
editor.session.setMode("ace/mode/javascript");
editor.getSession().setTabSize(4);
editor.getSession().setUseWrapMode(true);
const defaultCode = `function echo(j) {\n\treturn 'Hello ' + j;\n}\nconsole.log(echo("Jojo"));`;
editor.setValue(defaultCode);

// editor.setTheme("ace/theme/ambiance");

function clearConsole() {
    consoleLogs.textContent = '';
}

(function () {
    default_log = console.log;
    default_clear = console.clear;

    let outputArgs;

    console.log = function (...args) {
        for (let arg of args) {
            if (typeof arg == 'object') {
                consoleLogs.append(`Object ${JSON.stringify(arg)}`);
            } else {
                consoleLogs.append(`>> ${arg} \n`);
            }
        }

        default_log(...args);
    }
    console.clear = function () {
        // Console prompt
        consoleLogs.textContent = '';

        default_clear();
    }
    clear = console.clear;

})();


// EVENTS
runCodeBtn.addEventListener('click', () => {

    eval(editor.getValue());
});

resetCodeBtn.addEventListener('click', () => {
    clearConsole()
});


// console.log('hello' + 'jojo')

