package sk.enlightening.my3dsite.model

import jakarta.persistence.*
import org.bson.types.ObjectId
import org.springframework.data.mongodb.core.mapping.Document
import sk.enlightening.my3dsite.utils.YearMonthDateAttributeConverter
import java.time.YearMonth
import java.util.*

@Document
data class UserCvRecord (
    @Id
    var id: ObjectId? = null,

    @Column(name = "date_from", columnDefinition = "date")
    //@Convert(converter = YearMonthDateAttributeConverter::class)
    val from: Date? = null,

    @Column(name = "date_to", columnDefinition = "date")
    //@Convert(converter = YearMonthDateAttributeConverter::class)
    val to: Date? = null,
    val employer: String? = null,
    val customer: String? = null,
    val projectName: String? = null,
    val projectDescription: String? = null,
    val technologies: String? = null,
    val role: String? = null,
    var oktaUserId: String? = null
) {
    constructor() : this(null, null, null, null, null, null, null, null, null)
}