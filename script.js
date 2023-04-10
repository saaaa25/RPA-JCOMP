function clickon() {
    const e = document.getElementById('mail').value;
    const p = document.getElementById('pass').value;
    if (e == '' && p == '') {
        document.getElementById('error').innerHTML = "Enter the Email Id and the Password!";
        document.getElementById('merror').innerHTML = "";
        document.getElementById('perror').innerHTML = "";
    }
    else if (e == '') {
        document.getElementById('error').innerHTML = "";
        document.getElementById('merror').innerHTML = "Enter the Email Id!";
        document.getElementById('perror').innerHTML = "";
    }
    else if (p == '') {
        document.getElementById('error').innerHTML = "";
        document.getElementById('merror').innerHTML = "";
        document.getElementById('perror').innerHTML = "Enter the Password!";
    }
    else {
        if (e == 'abinaya.sri2020@vitstudent.ac.in' && p == '1234') {
            var name = "Abinaya Sri";
            sessionStorage.setItem("NameP",name);
            window.location.href = 'InsidePage.html';
        }
        else if (e == 'ananya.dikshit2020@vitstudent.ac.in' && p == '1234') {
            var name = "Ananya Dikshit";
            sessionStorage.setItem("NameD", name);
            window.location.href = 'doctorhome.html';
        }
        else if (e == 'konda.satwika2020@vitstudent.ac.in' && p == '1234') {
            var name = "Konda Satwika";
            sessionStorage.setItem("NameL", name);
            window.location.href = 'labhome.html';
        }
        else if (e == 'kaviyasree.rm2020@vitstudent.ac.in' && p == '1234') {
            var name = "Kaviya Sree R M";
            sessionStorage.setItem("NameR", name);
            window.location.href = 'rechome.html';
        }
        else if (e == 'harshithadevina.anto2020@vitstudent.ac.in' && p == '1234') {
            var name = "Harshitha Devina Anto";
            sessionStorage.setItem("NamePh", name);
            window.location.href = 'parhome.html';
        }
        else {
            document.getElementById('error').innerHTML = "Wrong Email Id Or Password!";
            document.getElementById('merror').innerHTML = "";
            document.getElementById('perror').innerHTML = "";
        }
    }
}

function clickup() {
    window.location.href = 'https://forms.gle/BoQGmLKhScRoQKaS9';
}