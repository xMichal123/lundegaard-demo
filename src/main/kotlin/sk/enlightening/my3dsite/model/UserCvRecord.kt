package sk.enlightening.my3dsite.model

import jakarta.persistence.*
import org.bson.types.ObjectId
import org.springframework.data.mongodb.core.mapping.Document
import sk.enlightening.my3dsite.utils.YearMonthDateAttributeConverter
import java.time.YearMonth
import java.util.*

@Document
class UserCvRecord (
    @Id
    val id: ObjectId? = null,

    @Column(name = "date_from", columnDefinition = "date")
    //@Convert(converter = YearMonthDateAttributeConverter::class)
    private val from: Date? = null,

    @Column(name = "date_to", columnDefinition = "date")
    //@Convert(converter = YearMonthDateAttributeConverter::class)
    private val to: Date? = null,
    private val employer: String? = null,
    private val customer: String? = null,
    private val projectName: String? = null,
    private val projectDescription: String? = null,
    private val technologies: String? = null,
    private val role: String? = null,

    @ManyToOne(cascade = [CascadeType.PERSIST]) var user: User? = null

) {
    constructor() : this(null, null, null, null, null, null, null, null, null)
}