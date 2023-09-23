import eu.michalmihalik.lundegaard_mihalik_demo.controller.RequestKindQueryResolver
import eu.michalmihalik.lundegaard_mihalik_demo.service.KindOfRequestService
import graphql.GraphQL
import graphql.kickstart.tools.SchemaParser
import graphql.schema.GraphQLSchema
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.core.io.Resource
import org.springframework.beans.factory.annotation.Autowired // Import for @Autowired

@Configuration
class GraphQLConfig {

    @Autowired // Inject the KindOfRequestService dependency
    private lateinit var kindOfRequestService: KindOfRequestService

    // ... Other configuration

    @Bean
    fun graphQL(): GraphQL {
        val schemaParser = SchemaParser.newParser()
            .schemaString("classpath:schema.graphql") // Define your GraphQL schema string here
            .resolvers(RequestKindQueryResolver(kindOfRequestService)) // Inject the dependency here
            .build()

        val graphQLSchema: GraphQLSchema = schemaParser.makeExecutableSchema()

        return GraphQL.newGraphQL(graphQLSchema).build()
    }
}
