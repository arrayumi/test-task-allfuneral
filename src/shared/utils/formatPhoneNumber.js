function fromDataToPhoneNumber(stringFromServer) {
  const cleaned = stringFromServer.replace(/\D/g, "");
  return `+${cleaned.slice(0, 1)} ${cleaned.slice(1, 4)} ${cleaned.slice(4, 7)} ${cleaned.slice(7)}`;
}

function fromPhoneNumberToData(phoneNumberFromInput) {
  return phoneNumberFromInput.replace(/[ +]/g, "");
}

const formatPhone = {
  fromDataToPhoneNumber,
  fromPhoneNumberToData,
};

export default formatPhone;
