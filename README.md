
# Acarain - Platform Acara Kampus

Acarain adalah sebuah platform acara kampus berbasis website yang dibuat dengan framework NextJS. Di sini kita bisa melihat acara - acara yang di buat oleh kampus tersebut, bisa mendaftar ke acara tersebut dan melakukan absensi di acara dengan QR Code.


## Tim Pembuat

Website ini dibuat sebagai proyek akhir matakuliah PBS (Pemrograman Berorientasi Service) oleh :

| Nama  | NPM | Role | Akun GitHub |
| ------------- | ------------- | ------------- | ------------- |
| Siti Aspita Fitri  | 22312046 | CMS Developer  | [@aspitaap](https://github.com/aspitaap) |
| Indri Tri Maharani  | 22312035 | Backend Developer  | [@IndriMaharani](https://github.com/IndriMaharani) |
| Ayuni Delmira  | 22312037 | Frontend Developer  | [@adelmirayuni](https://github.com/adelmirayuni) |


## Install Backend

Clone repository ini atau download zip nya.
Jalankan command di bawah ini satu per satu.

```bash
  cd acarain-backend
  npm install
  cp .env.example .env
  npx prisma migrate dev
```
Masukkan data berikut langsung ke database menggunakan DBMS yang di pakai misal (PHPMyAdmin) sebagai data awal akun admin.
- id: cmb0yhv5b0000qgrca2ch60bb
- name: Siti Aspita
- email: admin@gmail.com
- password: $2b$10$BzFhkQLP17JHWTrEX6XzjeYChcnxwKBsnrn1x/5zeN5K/NidVJdoi
- password asli: admin123

```bash
npm run dev
```
Backend akan berjalan di port http://localhost:3001
## Install CMS

Jalankan command di bawah ini satu per satu.

```bash
  cd acarain-cms
  npm install
  cp .env.example .env
  npm run dev
```
CMS akan berjalan di port http://localhost:3002/panel
## Install Frontend

Jalankan command di bawah ini satu per satu.

```bash
  cd acarain-frontend
  npm install
  cp .env.example .env
  npm run dev
```
Frontend akan berjalan di port http://localhost:3000
## Tech Stack

**Client:** NextJS, TailwindCSS, DaisyUI, HTML5 QRCode

**Backend:** Node, NextJS, PrismaJS

