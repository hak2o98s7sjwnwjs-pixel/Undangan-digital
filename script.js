document.addEventListener(
    "DOMContentLoaded",
    function () {


        /* =================================================
           LOADING
        ================================================= */

        const loading =
            document.getElementById("loading");


        window.addEventListener(
            "load",
            function () {

                if (loading) {

                    setTimeout(
                        function () {

                            loading.classList.add(
                                "hide"
                            );

                        },
                        500
                    );

                }

            }
        );



        /* =================================================
           COVER
        ================================================= */

        const cover =
            document.getElementById("cover");

        const openInvitation =
            document.getElementById(
                "openInvitation"
            );


        if (
            cover &&
            openInvitation
        ) {

            openInvitation.addEventListener(
                "click",
                function () {

                    cover.classList.add(
                        "hide"
                    );


                    document.body.classList.remove(
                        "lock-scroll"
                    );


                    playMusic();

                }
            );

        }



        /* =================================================
           MUSIC
        ================================================= */

        const music =
            document.getElementById(
                "weddingMusic"
            );

        const musicButton =
            document.getElementById(
                "musicButton"
            );


        function playMusic() {

            if (!music) {
                return;
            }


            music.play()
                .then(
                    function () {

                        if (musicButton) {

                            musicButton.textContent =
                                "🔊";

                            musicButton.classList.add(
                                "playing"
                            );

                        }

                    }
                )
                .catch(
                    function () {

                        console.log(
                            "Musik membutuhkan interaksi pengguna."
                        );

                    }
                );

        }


        if (
            music &&
            musicButton
        ) {

            musicButton.addEventListener(
                "click",
                function () {

                    if (
                        music.paused
                    ) {

                        playMusic();

                    } else {

                        music.pause();

                        musicButton.textContent =
                            "🎵";

                        musicButton.classList.remove(
                            "playing"
                        );

                    }

                }
            );

        }



        /* =================================================
           COUNTDOWN
        ================================================= */

        const days =
            document.getElementById(
                "days"
            );

        const hours =
            document.getElementById(
                "hours"
            );

        const minutes =
            document.getElementById(
                "minutes"
            );

        const seconds =
            document.getElementById(
                "seconds"
            );


        if (
            days &&
            hours &&
            minutes &&
            seconds
        ) {


            /*
               =============================================
               GANTI TANGGAL PERNIKAHAN DI SINI
               =============================================
            */

            const weddingDate =
                new Date(
                    "september 06, 2026 08:00:00"
                ).getTime();


            function updateCountdown() {

                const now =
                    new Date().getTime();


                const distance =
                    weddingDate - now;


                if (
                    distance <= 0
                ) {

                    days.textContent =
                        "00";

                    hours.textContent =
                        "00";

                    minutes.textContent =
                        "00";

                    seconds.textContent =
                        "00";

                    return;

                }


                const d =
                    Math.floor(
                        distance /
                        (
                            1000 *
                            60 *
                            60 *
                            24
                        )
                    );


                const h =
                    Math.floor(
                        (
                            distance %
                            (
                                1000 *
                                60 *
                                60 *
                                24
                            )
                        ) /
                        (
                            1000 *
                            60 *
                            60
                        )
                    );


                const m =
                    Math.floor(
                        (
                            distance %
                            (
                                1000 *
                                60 *
                                60
                            )
                        ) /
                        (
                            1000 *
                            60
                        )
                    );


                const s =
                    Math.floor(
                        (
                            distance %
                            (
                                1000 *
                                60
                            )
                        ) /
                        1000
                    );


                days.textContent =
                    String(d).padStart(
                        2,
                        "0"
                    );


                hours.textContent =
                    String(h).padStart(
                        2,
                        "0"
                    );


                minutes.textContent =
                    String(m).padStart(
                        2,
                        "0"
                    );


                seconds.textContent =
                    String(s).padStart(
                        2,
                        "0"
                    );

            }


            updateCountdown();


            setInterval(
                updateCountdown,
                1000
            );

        }



        /* =================================================
           COPY REKENING
        ================================================= */

        const copyRekening =
            document.getElementById(
                "copyRekening"
            );

        const rekening =
            document.getElementById(
                "rekening"
            );


        if (
            copyRekening &&
            rekening
        ) {

            copyRekening.addEventListener(
                "click",
                async function () {

                    const text =
                        rekening.textContent.trim();


                    if (!text) {

                        alert(
                            "Nomor rekening belum tersedia."
                        );

                        return;

                    }


                    try {

                        await navigator.clipboard.writeText(
                            text
                        );


                        copyRekening.textContent =
                            "✓ Berhasil Disalin";


                        setTimeout(
                            function () {

                                copyRekening.textContent =
                                    "📋 Salin Rekening";

                            },
                            2000
                        );


                    } catch (error) {

                        alert(
                            "Salin otomatis tidak tersedia. Silakan tekan dan tahan nomor rekening untuk menyalinnya."
                        );

                    }

                }
            );

        }



        /* =================================================
           COPY ALAMAT
        ================================================= */

        const copyAddress =
            document.getElementById(
                "copyAddress"
            );


        if (copyAddress) {

            copyAddress.addEventListener(
                "click",
                async function () {

                    const addressElement =
                        copyAddress.parentElement
                        .querySelector(
                            ".address"
                        );


                    if (!addressElement) {

                        return;

                    }


                    const text =
                        addressElement.textContent
                        .replace(
                            /\s+/g,
                            " "
                        )
                        .trim();


                    try {

                        await navigator.clipboard.writeText(
                            text
                        );


                        copyAddress.textContent =
                            "✓ Alamat Disalin";


                        setTimeout(
                            function () {

                                copyAddress.textContent =
                                    "📋 Salin Alamat";

                            },
                            2000
                        );


                    } catch (error) {

                        alert(
                            "Gagal menyalin alamat."
                        );

                    }

                }
            );

        }



        /* =================================================
           SCROLL REVEAL
        ================================================= */

        const revealElements =
            document.querySelectorAll(
                ".reveal"
            );


        function revealOnScroll() {

            const screenHeight =
                window.innerHeight;


            revealElements.forEach(
                function (element) {

                    const position =
                        element.getBoundingClientRect()
                        .top;


                    if (
                        position <
                        screenHeight - 70
                    ) {

                        element.classList.add(
                            "active"
                        );

                    }

                }
            );

        }


        window.addEventListener(
            "scroll",
            revealOnScroll
        );


        revealOnScroll();



        /* =================================================
           GALERI LIGHTBOX
        ================================================= */

        const galleryImages =
            document.querySelectorAll(
                ".gallery-item img"
            );


        galleryImages.forEach(
            function (image) {

                image.addEventListener(
                    "click",
                    function () {


                        const lightbox =
                            document.createElement(
                                "div"
                            );


                        lightbox.className =
                            "lightbox";


                        const closeButton =
                            document.createElement(
                                "button"
                            );


                        closeButton.className =
                            "lightbox-close";


                        closeButton.textContent =
                            "×";


                        const fullImage =
                            document.createElement(
                                "img"
                            );


                        fullImage.src =
                            image.src;


                        fullImage.alt =
                            image.alt;


                        lightbox.appendChild(
                            fullImage
                        );


                        lightbox.appendChild(
                            closeButton
                        );


                        document.body.appendChild(
                            lightbox
                        );


                        closeButton.addEventListener(
                            "click",
                            function (event) {

                                event.stopPropagation();

                                lightbox.remove();

                            }
                        );


                        lightbox.addEventListener(
                            "click",
                            function () {

                                lightbox.remove();

                            }
                        );

                    }
                );

            }
        );



        /* =================================================
           RSVP
        ================================================= */

        const rsvpForm =
            document.getElementById(
                "rsvpForm"
            );

        const wishes =
            document.getElementById(
                "wishes"
            );


        if (
            rsvpForm &&
            wishes
        ) {

            rsvpForm.addEventListener(
                "submit",
                function (event) {

                    event.preventDefault();


                    const nameInput =
                        document.getElementById(
                            "guestName"
                        );


                    const attendanceInput =
                        document.getElementById(
                            "attendance"
                        );


                    const messageInput =
                        document.getElementById(
                            "guestMessage"
                        );


                    if (
                        !nameInput ||
                        !attendanceInput ||
                        !messageInput
                    ) {

                        return;

                    }


                    const name =
                        nameInput.value.trim();


                    const attendance =
                        attendanceInput.value;


                    const message =
                        messageInput.value.trim();


                    if (
                        !name ||
                        !attendance ||
                        !message
                    ) {

                        alert(
                            "Mohon lengkapi semua data."
                        );

                        return;

                    }


                    /*
                       Membuat kartu ucapan
                    */

                    const card =
                        document.createElement(
                            "article"
                        );


                    card.className =
                        "wish-card";


                    const nameElement =
                        document.createElement(
                            "strong"
                        );


                    nameElement.textContent =
                        name;


                    const statusElement =
                        document.createElement(
                            "span"
                        );


                    statusElement.textContent =
                        attendance;


                    const messageElement =
                        document.createElement(
                            "p"
                        );


                    messageElement.textContent =
                        message;


                    card.appendChild(
                        nameElement
                    );


                    card.appendChild(
                        statusElement
                    );


                    card.appendChild(
                        messageElement
                    );


                    wishes.prepend(
                        card
                    );


                    /*
                       WhatsApp
                    */

                    const phoneNumber =
                        "6281234567890";


                    const whatsappMessage =
                        "Halo, saya " +
                        name +
                        ".%0A%0A" +
                        "Konfirmasi: " +
                        attendance +
                        "%0A%0A" +
                        "Ucapan: " +
                        message;


                    const whatsappURL =
                        "https://wa.me/" +
                        phoneNumber +
                        "?text=" +
                        whatsappMessage;


                    const send =
                        confirm(
                            "Ucapan sudah ditampilkan.%0A%0AKirim juga konfirmasi ke WhatsApp?"
                        );


                    if (send) {

                        window.open(
                            whatsappURL,
                            "_blank"
                        );

                    }


                    rsvpForm.reset();

                }
            );

        }



        /* =================================================
           BACK TO TOP
        ================================================= */

        const topButton =
            document.getElementById(
                "topButton"
            );


        if (topButton) {


            window.addEventListener(
                "scroll",
                function () {

                    if (
                        window.scrollY >
                        500
                    ) {

                        topButton.classList.add(
                            "show"
                        );

                    } else {

                        topButton.classList.remove(
                            "show"
                        );

                    }

                }
            );


            topButton.addEventListener(
                "click",
                function () {

                    window.scrollTo({

                        top: 0,

                        behavior: "smooth"

                    });

                }
            );

        }



        /* =================================================
           NAVBAR ACTIVE
        ================================================= */

        const navLinks =
            document.querySelectorAll(
                ".bottom-nav a"
            );


        navLinks.forEach(
            function (link) {

                link.addEventListener(
                    "click",
                    function () {

                        navLinks.forEach(function (item) {

                                item.style.opacity =
                                    "0.7";

                            }
                        );


                        link.style.opacity =
                            "1";

                    }
                );

            }
        );



        /* =================================================
           CONSOLE
        ================================================= */

        console.log(
            "❤️ Undangan Rifkie & Nurani berhasil dimuat."
        );


    }
);
  