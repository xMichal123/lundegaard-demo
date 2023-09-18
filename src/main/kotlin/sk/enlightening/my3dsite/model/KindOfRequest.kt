package sk.enlightening.my3dsite.model

import jakarta.persistence.Entity
import jakarta.persistence.GeneratedValue
import jakarta.persistence.GenerationType
import jakarta.persistence.Id


@Entity
data class KindOfRequest(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long = 0,
    val name: String = "" // Provide default values for other properties as needed
) {
    // Default constructor with no parameters
    constructor() : this(id = 0, name = "")
}
