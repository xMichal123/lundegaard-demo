package sk.enlightening.my3dsite.utils

import jakarta.persistence.AttributeConverter
import java.sql.Date
import java.time.Instant
import java.time.YearMonth
import java.time.ZoneId


class YearMonthDateAttributeConverter : AttributeConverter<YearMonth?, Date?> {
    override fun convertToDatabaseColumn(
        attribute: YearMonth?
    ): Date? {
        return if (attribute != null) {
            Date.valueOf(
                attribute.atDay(1)
            )
        } else null
    }

    override fun convertToEntityAttribute(
        dbData: Date?
    ): YearMonth? {
        return if (dbData != null) {
            YearMonth.from(
                Instant
                    .ofEpochMilli(dbData.time)
                    .atZone(ZoneId.systemDefault())
                    .toLocalDate()
            )
        } else null
    }
}