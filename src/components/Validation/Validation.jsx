
const Validation = (value) => {
    const error = {};
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const regexName = "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$";
    const regexNumber = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
    const regexNumber2 = /^[0-9]+$/;

    if (!value.email) {
        error.email = 'Email cannot be blank.'
    } else if (!value.email.match(regexEmail)) {
        error.email = 'Email is invalid.'
    }

    if (!value.name) {
        error.name = 'Name cannot be blank.'
    } else if (!value.name.match(regexName)) {
        error.name = 'Name is invalid.'
    }

    if (!value.password) {
        error.password = 'Passsword cannot be blank.'
    } else if (value.password.length < 8) {
        error.password = 'Password must be more than 8 characters.'
    }

    if (!value.confirmPassword) {
        error.confirmPassword = 'Confirm password cannot be blank.'
    } else if (value.confirmPassword.length < 8) {
        error.confirmPassword = 'Password must be more than 8 characters.'
    } else if (value.confirmPassword.trim() !== value.password.trim()) {
        error.confirmPassword = 'Password dont match.'
    }

    if (!value.phone) {
        error.phone = 'Phone cannot be blank.'
    } else if (!value.phone.match(regexNumber)) {
        error.phone = 'Phone is invalid.'
    } else if (!value.phone.match(regexNumber2)) {
        error.phone = 'Phone is invalid.'
    }

    if (value.gender === null) {
        error.gender = 'Please select your gender.' 
    }

  return error;
}

export default Validation