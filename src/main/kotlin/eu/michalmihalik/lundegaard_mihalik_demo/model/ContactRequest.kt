package eu.michalmihalik.lundegaard_mihalik_demo.model

import jakarta.persistence.*
import org.hibernate.annotations.CreationTimestamp
import java.sql.Timestamp

@Entity
data class ContactRequest(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long = 0,
    val kindOfRequest: String?,
    val policyNumber: String?,
    val name: String?,
    val surname: String?,
    val request: String?,
    @CreationTimestamp
    val createdAt: Timestamp?
)
