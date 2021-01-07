﻿// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
//========================================= Global ==========================================//
$(function () {
    $("#loaderbody").addClass('hide');

    $(document).bind('ajaxStart', function () {
        $("#loaderbody").removeClass('hide');
    }).bind('ajaxStop', function () {
        $("#loaderbody").addClass('hide');
    });
});

function DeletePopUp() {
    return Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    });
}

function SweetAlertSubmitedSuccessfully() {
    Swal.mixin({
        toast: true,
        background: 'Green',
        position: 'bottom-left',
        showConfirmButton: false,
        timer: 5000, 
        customClass: 'my-swal2-styling'
    }).fire({
        type: 'success',
        title: '<span style="color:floralwhite">Submited Successfuly</span>'
    })
};

function SweetAlertSubmitFailed(ErrorMessage) {  // confirmButtonText: 'Cool'
    Swal.mixin({
        toast: true,
        background: 'red',
        position: 'bottom-left',
        showConfirmButton: false,
        timer: 5000,
        customClass: 'my-swal2-styling'
    }).fire({
        type: 'error',
        title: '<span style="color:White" >' + ErrorMessage + '</span>'
    })
};
//========================================= Global ==========================================//


//========================================================================== Product ========//
//showProductInPopup = (url, title) => {
//    $.ajax({
//        type: "Get",
//        url: url,
//        success: function (res) {
//            $("#product-form-modal .modal-title").html(title);
//            $("#product-form-modal .modal-body").html(res);
//            $("#product-form-modal").modal('show');
//        }
//    })
//};

//jQueryAjaxPostToAddOrEditProduct = form => {
//    try {
//        $.ajax({
//            type: 'POST',
//            url: form.action,
//            data: new FormData(form),
//            contentType: false,
//            processData: false,
//            success: function (res) {
//                if (res.success) {
//                    $("#view-all-products").html(res.html);
//                    $("#product-form-modal .modal-title").html('');
//                    $("#product-form-modal .modal-body").html('');
//                    $("#product-form-modal").modal('hide');
//                    SubmitedSuccessfully("Product");
//                }
//                else {
//                    toastr.error(res.error)
//                    $("#product-form-modal .modal-body").html(res.html);
//                }
//            },
//            error: function (err) {
//                toastr.error("Error in submitting product")
//                console.log(err);
//            }
//        })
//    } catch (e) {
//        console.log(e);
//    }
//    to prevent default form submit event
//    return false;
//};

//jQueryAjaxDeleteProduct = form => {
//    swal({
//        title: "Are you sure?",
//        text: "Once deleted Product, you will not be able to recover",
//        icon: "warning",
//        buttons: true,
//        dangerMode: true
//    }).then((willDelete) => {
//        if (willDelete)
//            try {
//                $.ajax({
//                    type: 'POST',
//                    url: form.action,
//                    data: new FormData(form),
//                    contentType: false,
//                    processData: false,
//                    success: function (res) {
//                        console.log("ressssssss " + res);

//                        if (res.success) {
//                            toastr.success("Product Deleted successfully")
//                            $("#view-all-products").html(res.html);
//                        } else {
//                            toastr.error(res.error)
//                            $("#view-all-products").html(res.html);
//                        }
//                    },
//                    error: function (err) {
//                        toastr.error("Error in Deleting Product")
//                        console.log(err);
//                    }
//                })
//            } catch (e) {
//                console.log(e);
//            }
//    });
//    to prevent default form submit event
//    return false;
//};

//showProductDetailsInPopup = (url, title) => {
//    $.ajax({
//        type: "Get",
//        url: url,
//        success: function (res) {
//            $("#product-form-modal .modal-title").html(title);
//            $("#product-form-modal .modal-body").html(res);
//            $("#product-form-modal").modal('show');
//        }
//    })
//};
//========================================================================== Product ========//


//============================================================== Supplier ===================//
//showSupplierInPopup = (url, title) => {
//    $.ajax({
//        type: "GET",
//        url: url,
//        success: function (res) {
//            $("#supplier-form-modal .modal-title").html(title);
//            $("#supplier-form-modal .modal-body").html(res);
//            $("#supplier-form-modal").modal('show');
//        }
//    })
//};

//jQueryAjaxPostToAddOrEditSupplier = form => {
//    try {
//        $.ajax({
//            type: 'POST',
//            url: form.action,
//            data: new FormData(form),
//            contentType: false,
//            processData: false,
//            success: function (res) {
//                if (res.success) {
//                    $("#view-all-suppliers").html(res.html);
//                    $("#supplier-form-modal .modal-title").html('');
//                    $("#supplier-form-modal .modal-body").html('');
//                    $("#supplier-form-modal").modal('hide');
//                    SubmitedSuccessfully("Supplier");
//                }
//                else {
//                    toastr.error(res.error)
//                    $("#supplier-form-modal .modal-body").html(res.html);
//                }
//            },
//            error: function (err) {
//                toastr.error("Error in submitting supplier")
//                console.log(err);
//            }
//        })
//    } catch (e) {
//        console.log("hereee");
//        console.log(e);
//    }
//    //to prevent default form submit event
//    return false;
//};

//jQueryAjaxDeleteSupplier = form => {
//    swal({
//        title: "Are you sure?",
//        text: "Once deleted supplier, \"All\" products of this supplier will permanently go away!",
//        icon: "warning",
//        buttons: true,
//        dangerMode: true
//    }).then((willDelete) => {
//        if (willDelete)
//            try {
//                $.ajax({
//                    type: 'POST',
//                    url: form.action,
//                    data: new FormData(form),
//                    contentType: false,
//                    processData: false,
//                    success: function (res) {
//                        if (res.success) {
//                            toastr.success("Suplier deleted successfully")
//                            $("#view-all-suppliers").html(res.html);
//                        } else {
//                            toastr.error(res.error)
//                            $("#view-all-suppliers").html(res.html);
//                        }
//                    },
//                    error: function (err) {
//                        toastr.error("Error in deleting supplier")
//                        console.log(err);
//                    }
//                })
//            } catch (e) {
//                console.log(e);
//            }
//    });
//    //to prevent default form submit event
//    return false;
//};


var supplierDataTable;
$(document).ready(function () {
    supplierDataTable = $('#table-supplier').DataTable({
        serverSide: true,
        responsive: true,
        autoWidth: true,
        scrollX: true,
        scrollY: 300,
        sDom: 'ltip',
        lengthMenu: [[8, 15, 20, 50], [8, 15, 20, 50]],
        columnDefs: [
            {
                'targets': [9, 10],
                'orderable': false,
                'searchable': false
            }],
        ajax: {
            url: '/Supplier/Suppliers',
            type: 'Post',
            contentType: 'application/json',
            dataType: 'json',
            data: function (response) {
                return JSON.stringify(response);
            }
        },
        columns: [
            { data: 'companyName', autoWidth: true },
            { data: 'contactName', autoWidth: true },
            { data: 'emergencyMobile', autoWidth: true },
            { data: 'phone', autoWidth: true },
            {
                data: 'enabled',
                render: function (data, type, row) {
                    if (data == true) {
                        return `<div style="text-align:center">
                                        <i class="fas fa-check" style="color:blue"></i>
                                </div>`;
                    }
                    else
                        return ``;
                }, autoWidth: true
            },
            { data: 'city', autoWidth: true },
            { data: 'address', autoWidth: true },
            { data: 'postalCode', autoWidth: true },
            { data: 'homePage', autoWidth: true },
            {
                data: 'id',
                render: function (data, type, row) {
                    return `<div style="text-align:center">
                                <a class="my-mousechange"  onclick="showSupplierInPopup(${data},'Edit Supplier')">
                                     <i class="fas fa-edit fa-1x" style="color:green"></i>
                                </a>
                            </div>`;
                },
                autoWidth: true
            },
            {
                data: 'id',
                render: function (data, type, row) {
                    return `<div style="text-align:center">
                                <a class="my-mousechange" onclick="jQueryAjaxPostToDeleteSupplier(${data})">
                                    <i class="fas fa-trash fa-1x" style="color:red"></i>
                                </a>
                            </div>`;
                },
                autoWidth: true
            }
        ]
    });
});

SearchSupplier = () => {
    supplierDataTable.search($('#search-supplier-input-id').val()).draw();
}

showSupplierInPopup = (id, title) => {
    $.ajax({
        type: 'Get',
        url: '/Supplier/AddOrEditSupplier',
        data: { 'id': id },
        success: function (response) {
            $('#supplier-form-modal .modal-title').html(title);
            $('#supplier-form-modal .modal-body').html(response);
            $('#supplier-form-modal').modal('show');
        }
    })
};

jQueryAjaxPostToAddOrEditSupplier = form => {
    try {
        $.ajax({
            type: 'Post',
            url: form.action,
            data: new FormData(form),
            contentType: false,
            processData: false,
            success: function (response) {
                if (response.success) {
                    $('#supplier-form-modal .modal-title').html('');
                    $('#supplier-form-modal .modal-body').html('');
                    $('#supplier-form-modal').modal('hide');
                    supplierDataTable.draw();
                    SweetAlertSubmitedSuccessfully();
                }
                else {
                    SweetAlertSubmitFailed(response.error)
                    $('#supplier-form-modal .modal-body').html(response.html);
                }
            },
            error: function (e) {
                SweetAlertSubmitFailed('Error in Submitting supplier')
                console.log(e);
            }
        })
    } catch (e) {
        console.log(e);
    }
    // to prevent default form submit event
    return false;
};

jQueryAjaxPostToDeleteSupplier = (id) => {
    DeletePopUp().then((result) => {
        if (result.value)
            try {
                $.ajax({
                    type: 'Post',
                    url: '/Supplier/Delete',
                    contentType: 'application/x-www-form-urlencoded',
                    data: {
                        '__RequestVerificationToken':
                            $('#table-supplier input[name="__RequestVerificationToken"]').val(),
                        'id': id
                    },
                    success: function (response) {
                        if (response.success) {
                            supplierDataTable.draw();
                            SweetAlertSubmitedSuccessfully();
                        } else {
                            storageDataTable.draw();
                            SweetAlertSubmitFailed(response.error)
                        }
                    },
                    error: function (e) {
                        SweetAlertSubmitFailed('Error in Deleting supplier');
                        console.log(e);
                    }
                })
            } catch (e) {
                console.log(e);
            }
    });
    //to prevent default form submit event
    return false;
};
//============================================================== Supplier ===================//


//=========================================================================== Storage =======//
https://www.thecodehubs.com/server-side-pagination-using-datatable-in-net-core/

var storageDataTable;
$(document).ready(function () {
    storageDataTable = $('#table-storage').DataTable({
        serverSide: true,
        responsive: true,
        autoWidth: true,
        scrollX: true,
        scrollY: 300,  //fixed width
        sDom: 'ltip', 
        lengthMenu: [[8, 15, 20, 50], [8, 15, 20, 50]],
        columnDefs: [
            {
                'targets': [5, 6],
                'orderable': false,
                'searchable': false
            }],
        ajax: {
            url: '/Storage/Storages',
            type: 'Post',
            contentType: 'application/json',
            dataType: 'json',
            data: function (response) {
                return JSON.stringify(response);
            }
        },
        columns: [
            { data: 'name', autoWidth: true },
            { data: 'phone', autoWidth: true  },
            {
                data: 'enabled',
                render: function (data, type, row) {
                    if (data == true) {
                        return `<div style="text-align:center">
                                        <i class="fas fa-check" style="color:blue"></i>
                                </div>`;
                    }
                    else
                        return ``;
                }, autoWidth: true 
            },
            { data: 'city', autoWidth: true },
            { data: 'address', autoWidth: true  },
            {
                data: 'id',
                render: function (data, type, row) {
                    return `<div style="text-align:center">
                                <a class="my-mousechange"  onclick="showStorageInPopup(${data},'Edit Storage')">
                                     <i class="fas fa-edit fa-1x" style="color:green"></i>
                                </a>
                            </div>`;
                },
                autoWidth: true
            },
            {
                data: 'id',
                render: function (data, type, row) {
                    return `<div style="text-align:center">
                                <a class="my-mousechange" onclick="jQueryAjaxPostToDeleteStorage(${data})">
                                    <i class="fas fa-trash fa-1x" style="color:red"></i>
                                </a>
                            </div>`;
                },
                autoWidth: true 
            }
        ]
    });
    //sDom : Perform these operations on datatables
    //'l' - Length changing
    //'f' - Filtering input
    //'t' - The table!
    //'i' - Information
    //'p' - Pagination
    //'r' - pRocessing
    //For removing default search box just remove the f character from sDom.
});

SearchStorage = () => {
    storageDataTable.search($('#search-storage-input-id').val()).draw();
}

showStorageInPopup = (id, title) => {
    $.ajax({
        type: 'Get',
        url: '/Storage/AddOrEditStorage',
        data: { 'id': id },
        success: function (response) {
            $('#form-modal .modal-title').html(title);
            $('#form-modal .modal-body').html(response);
            $('#form-modal').modal('show');
        }
    })
};

jQueryAjaxPostToAddOrEditStorage = form => {
    try {
        $.ajax({
            type: 'Post',
            url: form.action,
            data: new FormData(form),
            contentType: false,
            processData: false,
            success: function (response) {
                if (response.success) {
                    $('#form-modal .modal-title').html('');
                    $('#form-modal .modal-body').html('');
                    $('#form-modal').modal('hide');
                    storageDataTable.draw();
                    SweetAlertSubmitedSuccessfully();
                }
                else {
                    SweetAlertSubmitFailed(response.error)
                    $('#form-modal .modal-body').html(response.html);
                }
            },
            error: function (e) {
                SweetAlertSubmitFailed('Error in Submitting storage')
                console.log(e);
            }
        })
    } catch (e) {
        console.log(e);
    }
    // to prevent default form submit event
    return false;
};

jQueryAjaxPostToDeleteStorage = (id) => {
    DeletePopUp().then((result) => {
        if (result.value)
            try {
                $.ajax({
                    type: 'Post',
                    url: '/Storage/Delete',
                    contentType: 'application/x-www-form-urlencoded',
                    data: {
                        '__RequestVerificationToken':
                            $('#table-storage input[name="__RequestVerificationToken"]').val(),
                        'id': id
                    },
                    success: function (response) {
                        if (response.success) {
                            storageDataTable.draw();
                            SweetAlertSubmitedSuccessfully();
                        } else {
                            storageDataTable.draw();
                            SweetAlertSubmitFailed(response.error)
                        }
                    },
                    error: function (e) {
                        SweetAlertSubmitFailed('Error in Deleting storage');
                        console.log(e);
                    }
                })
            } catch (e) {
                console.log(e);
            }
    });
    //to prevent default form submit event
    return false;
};
//=========================================================================== Storage =======//

