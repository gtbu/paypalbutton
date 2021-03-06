var generate = function() {
    let command = document.getElementsByName('cmd')[0].value
    let business = document.getElementsByName('business')[0].value
    let item_name = document.getElementsByName('item_name')[0].value
    let amount = document.getElementsByName('amount')[0].value
    let return_ = document.getElementsByName('return')[0].value
    let cancel_return = document.getElementsByName('cancel_return')[0].value
    let button_text = document.getElementsByName('button_text')[0].value
    let output = `<style>
button {
    padding:  10px 20px;
    border-radius: 4px;
    border: 1px solid black;
    background: #82bde0;
    transition: all .3s;
    cursor: pointer;
}

button:hover {box-shadow: 0 2px 4px black;}
</style>    
<FORM ACTION="https://www.paypal.com/cgi-bin/webscr" METHOD="POST" target="_blank">
    <INPUT TYPE="hidden" NAME="cmd" VALUE="` + command + `">
    <INPUT TYPE="hidden" NAME="business" VALUE="` + business + `">
    <INPUT TYPE="hidden" NAME="amount" VALUE="` + amount + `">
    <INPUT TYPE="hidden" NAME="item_name" VALUE="` + item_name + `">
    <INPUT TYPE="hidden" NAME="return" VALUE="` + return_ + `">
    <INPUT TYPE="hidden" NAME="cancel_return" VALUE="` + cancel_return + `">
    <button>` + button_text + `</button>
</FORM>`
    document.getElementById('output').value = output
    document.getElementById('label').innerHTML = 'Click below to copy to clipboard'
}

var copytoclip = function() {
    let box = document.getElementById('output')
    box.select()
    box.setSelectionRange(0, 99999)
    document.execCommand('copy')
    document.getElementById('label').innerHTML = 'Copied!'
}