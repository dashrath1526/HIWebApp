/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//*********************************************************************************************
$(document).ready(function () {
    $(document).on('click', '#generateInvoice', function (e) {
        var id = document.getElementById('inquiry-id').value;
        var appCharges = document.getElementById('appCharge').value;
        var processCharges = document.getElementById('processCharge').value;
        $.ajax({
            data: { inquiryId  : id,
                    applicationCharges  : appCharges,
                    processCharges  : processCharges   },
            type: "put",
            url: "http://localhost:46854/HIRestApp/webresources/usermodel.users/getInvoice",
            success: function (data) {
                //alert("success");
                document.getElementById('success-alert').textContent = data;
                document.getElementById('success-alert').style.display = "block";
                var frm = document.getElementsByName('inquiry-form')[0];
                frm.reset();
            },
            error: function (err) {
                //alert(err);
                document.getElementById('success-alert').style.display = "none";
            }
        });
    });
});
//*********************************************************************************************