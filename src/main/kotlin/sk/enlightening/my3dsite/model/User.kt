package sk.enlightening.my3dsite.model


import jakarta.persistence.GeneratedValue
import jakarta.persistence.Id
import org.bson.types.ObjectId
import org.springframework.data.mongodb.core.mapping.Document


@Document
data class User (
    @Id
    @GeneratedValue
    private val id: String? = null,
    private val name: String? = null,
    private val email: String? = null
)