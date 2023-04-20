package sk.enlightening.my3dsite.model

import jakarta.persistence.Entity

import jakarta.persistence.Id

import jakarta.persistence.Table


@Entity
@Table(name = "users")
data class User (
    @Id
    private val id: String? = null,
    private val name: String? = null,
    private val email: String? = null
)