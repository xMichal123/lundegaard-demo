package eu.michalmihalik.lundegaard_mihalik_demo.model

import jakarta.persistence.Entity
import jakarta.persistence.GeneratedValue
import jakarta.persistence.GenerationType
import jakarta.persistence.Id

@Entity
data class ContactRequest(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long = 0,
    val kindOfRequest: String,
    val policyNumber: String,
    val name: String,
    val surname: String,
    val request: String
)
