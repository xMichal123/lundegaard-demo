package sk.enlightening.my3dsite.model

import jakarta.persistence.*
import sk.enlightening.my3dsite.utils.YearMonthDateAttributeConverter
import java.time.YearMonth



@Entity
@Table(name = "user_cv_record")
data class UserCvRecord (
    @Id
    @GeneratedValue val id: Long? = null,

    @Column(name = "date_from", columnDefinition = "date")
    @Convert(converter = YearMonthDateAttributeConverter::class)
    private val from: YearMonth? = null,

    @Column(name = "date_to", columnDefinition = "date")
    @Convert(converter = YearMonthDateAttributeConverter::class)
    private val to: YearMonth? = null,
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