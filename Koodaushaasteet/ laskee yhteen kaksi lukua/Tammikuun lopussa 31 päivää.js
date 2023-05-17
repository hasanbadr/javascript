def vanha(syntymaaika, nykyhetki):
    # Muunna syntymäpäivä päiviksi
    syntymaaika_paivina = syntymaaika.year * 365.25 + syntymaaika.month * 31 + syntymaaika.day

    # Muunna nykyhetki päiviksi
    nykyhetki_paivina = nykyhetki.year * 365.25 + nykyhetki.month * 31 + nykyhetki.day

    # Vähennä syntymäpäivä nykyhetkestä ja palauta tulos
    ika_paivina = nykyhetki_paivina - syntymaaika_paivina
    return ika_paivina
