package sk.enlightening.my3dsite.model

import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.index.Indexed
import org.springframework.data.mongodb.core.mapping.Document

@Document
class Site {
    @Id
    private val id: String? = null
    @Indexed
    private val userId: String? = null
    private var name: String? = null
    private var url: String? = null
    private var description: String? = null
}
