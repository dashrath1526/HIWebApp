/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var pathArray = window.location.pathname.split('/');
var base_url = window.location.origin + '/' + window.location.pathname.split ('/') [1];
//--------------------------------------------------------------------------------------

$(document).ready(function () {
    $(document).on('click', '#btnSend', function (e) {
        var documents = [];
        var cars = '';
        $.each($("input[type='checkbox']:checked"), function () {
            documents.push($(this).val());
            cars += $(this).val()+",";
        });
        
        var inquiryId = document.getElementById('inquiryId').value;
        var documentString = documents.join(', ');
        console.log(documentString);
        $.ajax({
            data: { inquiryId  : inquiryId, documents: cars  },
            type: "post",
            url: base_url+"/webresources/inquiry.documentset/prepareDocumentSet",
            success: function (data) {
                //alert("success");
                document.getElementById('success-alert').textContent = data;
                document.getElementById('success-alert').style = "block";
                var frm = document.getElementsByName('frm')[0];
                frm.reset();
            },
            error: function (err) {
                //alert(err);
                document.getElementById('success-alert').style = "none";
            }
        });
    });
});