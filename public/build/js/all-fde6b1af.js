/*Define the angular module*/
var myApp = angular.module('myApp', []);

$(document).ready(function () {
    $("#drop-area-div").dmUploader({
        url: baseUrl + '/image/do-upload',
        method: 'post',
        allowedTypes: 'image/*',
        onInit: function () {
            console.log("Init");
        },
        onUploadError: function(id, message){
            console.log(id, message);
            console.log('Error trying to upload #' + id + ': ' + message);
        },
        onUploadSuccess: function(id, data){
            console.log('Succefully upload #' + id);
            console.log('Server response was:');
            console.log(data);
            $.danidemo.updateFileStatus(id, 'success', 'Upload Complete');
            $.danidemo.updateFileProgress(id, '100%');
        },
        onNewFile: function(id, file) {
            $.danidemo.addFile('#demo-files', id, file);
            /*** Begins Image preview loader ***/
            if (typeof FileReader !== "undefined"){
                var reader = new FileReader();
                // Last image added
                var img = $('#demo-files').find('.demo-image-preview').eq(0);
                reader.onload = function (e) {
                    img.attr('src', e.target.result);
                }
                reader.readAsDataURL(file);
            }
            else {
                // Hide/Remove all Images if FileReader isn't supported
                $('#demo-files').find('.demo-image-preview').remove();
            }
            /*** Ends Image preview loader ***/
        }
    });
});
//# sourceMappingURL=all.js.map