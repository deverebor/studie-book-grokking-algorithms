import { graph, searchSeller } from './breadth-first-search'

graph.you = ['alice', 'bob', 'claire']
graph.bob = ['anuj', 'peggy']
graph.alice = ['peggy']
graph.claire = ['thom', 'jonny']
graph.jonny = []

searchSeller('you')
