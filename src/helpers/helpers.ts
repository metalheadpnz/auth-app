export function formatUnixTime(unixTime: number): string {
    if (isNaN(unixTime)) {
        return "Дата публикации: неизвестно";
    }

    const dt = new Date(unixTime);

    const months: { [key: number]: string } = {
        1: "января", 2: "февраля", 3: "марта", 4: "апреля",
        5: "мая", 6: "июня", 7: "июля", 8: "августа",
        9: "сентября", 10: "октября", 11: "ноября", 12: "декабря"
    };

    const formattedDate = `Дата публикации: ${dt.getDate()} ${months[dt.getMonth() + 1]} ${dt.getFullYear()} г.`;
    return formattedDate;
}
