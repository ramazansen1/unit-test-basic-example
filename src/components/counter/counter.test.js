import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "./Counter";

// benzer özellik ile alakalı olan testleri
// bir araya toplamımızı sağlar

describe("Sayaç özellikleri", () => {
  test("Başlangıç değeri 0 olmalı", () => {
    render(<Counter />);

    // test edeceğimiz elemanı çağırma
    const count = screen.getByTestId("sayi");

    expect(count).toHaveTextContent("0");
  });

  test("Arttır butonuna tıklanınca değer 1 artmalı", () => {
    render(<Counter />);

    // Test elementlerini çağırma
    const count = screen.getByTestId("sayi");

    // Arttır butonunu çağırma
    const btn = screen.getByRole("button", { name: "Arttır" });

    // butona 1 kez tıklama
    fireEvent.click(btn);

    // count içerisinde ki değişimi kontrol etme
    expect(count).toHaveTextContent("1");
  });

  test("Azalt butonuna tıklanınca değer 1 azalmalı", () => {
    render(<Counter />);

    // test elemanlarını çağırma
    const count = screen.getByTestId("sayi");

    // Azalt butonunu çağırma
    const btn = screen.getByRole("button", { name: "Azalt" });

    // butona 1 kez tıklanma
    fireEvent.click(btn);

    // count içerisinde ki değişimi kontrol etme
    expect(count).toHaveTextContent("0");

    // butona 2 kez daha tıklanma
    fireEvent.click(btn);
    fireEvent.click(btn);

    // count içerisinde ki değişimi kontrol etme
    expect(count).toHaveTextContent("0");
  });
});
