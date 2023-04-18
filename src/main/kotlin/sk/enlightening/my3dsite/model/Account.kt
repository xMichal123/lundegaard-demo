package sk.enlightening.my3dsite.model

import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document


@Document
class Account {
    @Id
    private val id: String? = null
    private val owner: String? = null
    private val value: Double? = null
}