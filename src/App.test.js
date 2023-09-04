import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import Button from "./components/Button";
import SendForm from "./components/SendForm";

/*
  ! Test methodu bizden iki parametre alır.
  1- testing string açıklaması (testten ne beklediğimizi yazarız.)
  2- gerekli tesleri yapacağımız fonksiyon.
*/

test("renders unit test titles", () => {
  // test başladığı anda App bileşeni sanal dom da ekrana basılır.
  render(<App />);
  // `/unit test/i` burada kullanılan `i` büyük küçük harf duyarlılığını önler.
  // sanal ortamda ekrana bastıgımız elemana `screen` ile ulaşıyoruz.
  const headingElement = screen.getByText(/unit test/i);
  // çağırlan elemanı test etme.
  expect(headingElement).toBeInTheDocument();
});

// buton ilk başta kırmızı olacak ve içerisinde "Maviye Çevir" yazacak.
// üzerine tıkladıktan sonra
// mavi olucak ve içerisinde "Kırmızıya Çevir" yazacak.
test("buton doğru renge yazıya sahip", () => {
  render(<Button />);

  // test edeceğimiz elementi seçme
  // ekrandan birden fazla button olduğunda "name:" propertsiyle gönderebiliriz.
  const colorBtn = screen.getByRole("button", { name: "Maviye Çevir" });

  // butonun rengi kırmızı mı

  expect(colorBtn).toHaveStyle({ background: "red" });

  /*
   fireEvent : olay izleyicilerini kullanmamızı sağlar.
  */
  // butona tıklanma olayı
  fireEvent.click(colorBtn);

  // yeni rengi kontrol eder.
  expect(colorBtn).toHaveStyle({ background: "blue" });

  // yeni yazı doğru mu

  expect(colorBtn).toHaveTextContent(/kırmızıya çevir/i);
});

// checkbox ticklenmeden önce buton inaktif sonra aktif olmasını kontrol etme

test("checkboxa göre buton aktifliği", () => {
  render(<SendForm />);

  // test edilecek butonu çağırma
  const button = screen.getByRole("button");

  // butonun inaktif olmasını kontrol etme
  expect(button).toBeDisabled();

  // checkbox'ı çağırma
  const checkbox = screen.getByRole("checkbox");

  // checkbox'a tıklama
  fireEvent.click(checkbox);

  // butonun aktif olduğunu kontrol etme
  expect(button).toBeEnabled();
});
