document.addEventListener('DOMContentLoaded', function () {
    const calculate = document.querySelector('.calculate');
    const resetBtn = document.querySelector('.reset');

    calculate.addEventListener('click', (e) => {
        e.preventDefault();

        let billAmt = document.getElementById('amount').value.replace(/\./g, ""); // Hapus titik pemisah ribuan
        let percentage = document.getElementById('discount-percentage').value;
        let discountAmt = document.getElementById('discount-amount');
        let finalPay = document.getElementById('pay');

        billAmt = parseFloat(billAmt);
        percentage = parseFloat(percentage);

        if (isNaN(billAmt) || isNaN(percentage)) {
            alert("Harap masukkan angka yang valid!");
            return;
        }

        let discount = billAmt * (percentage / 100);
        let totalPay = billAmt - discount;

        let formatRupiah = (angka) => {
            return "Rp " + angka.toLocaleString('id-ID', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        };

        discountAmt.value = formatRupiah(discount);
        finalPay.value = formatRupiah(totalPay);
    });

    resetBtn.addEventListener('click', () => {
        document.getElementById('amount').value = "";
        document.getElementById('discount-percentage').value = "0";
        document.getElementById('discount-amount').value = "";
        document.getElementById('pay').value = "";
    });
});

