---
layout: paper
title: Slope stability of tangent bundles of smooth toric Fano varieties
title_ja: 滑らかなトーリックFano多様体の接束の安定性
authors: Bernd Johannes Wuebben
arxiv_primary_category: math.DG
arxiv_categories:
- math.DG
- math.AG
arxiv_abstract: We construct smooth toric Fano $n$-folds of Picard number $n+2$ whose tangent bundles are slope-stable with respect to the anticanonical polarization, for every $n\ge4$. The construction gives toric fibrations with fibre the del Pezzo surface of degree six over products of projective lines, parametrized by multisets of roots of $A_2$. Every nonempty multiset of nonzero roots with vanishing sum yields a stable tangent bundle. Among these multisets, the resulting variety is K\"ahler-Einstein if and only if the multiset is invariant under negation or under the order-three rotation of the root hexagon. We also construct stable, non-K\"ahler-Einstein examples with nonzero twist sum in every even dimension at least four. The proofs reduce slope inequalities and barycenter computations to integrals over the moment hexagon. For a smooth toric Fano variety with strictly semistable tangent bundle, we prove that polystability is equivalent to decomposition as a nontrivial product of
  smooth toric Fano varieties with anticanonically stable tangent bundles. Exact evaluation of Klyachko's criterion extends the stability classification to dimensions five and six, recovering the classifications of Steffens and Reynolds in dimensions three and four. Together with the product criterion, this determines polystability for all $8{,}630$ varieties in dimensions three through six, and hence the existence of Hermitian-Einstein metrics on their tangent bundles with respect to an anticanonical K\"ahler form.
topic: differential-geometry
tags:
- toric-geometry
- fano-varieties
- stability
- vector-bundles-sheaves
- hermite-einstein-metrics
arxiv_id: 2608.20411v2
arxiv_url: https://arxiv.org/abs/2608.20411
arxiv_submitted: '2026-08-15'
arxiv_updated: '2026-09-20'
summary: 反標準偏極に関して接束が安定な、高Picard数の滑らかなトーリックFano多様体を全次元n≥4で構成する。三〜六次元の接束の安定性・多重安定性も分類し、接束のHermitian–Einstein性と多様体のKähler–Einstein性の差を具体的に示す。
abstract_en: ''
summary_en: The paper separates stability of a Fano tangent bundle from existence of a Kähler–Einstein metric using toric geometry. Root-twisted del Pezzo fibrations provide stable tangent bundles at Picard rank two above the dimension. Product decompositions detect polystability in the strictly semistable cases. Exact combinatorial computations extend the stability census to dimensions five and six, while symmetry of the twists controls the Einstein condition in an infinite family.
abstract_ja: 次数六del Pezzo曲面をファイバーとするトーリックファイブレーションをA₂の根の多重集合で構成する。非零の根の和が零なら接束は反標準安定となり、その多重集合の対称性でKähler–Einstein性を判定できる。strictly semistableな接束の多重安定性を安定接束を持つFano因子への積分解と同値にし、三〜六次元の全8630例でHermitian–Einstein接束の存在を決定する。
abstract_source_url: https://arxiv.org/abs/2608.20411
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2608.20411v2](https://arxiv.org/abs/2608.20411)
- **著者:** Bernd Johannes Wuebben
- **初回投稿日:** 2026-08-15
- **最終更新日:** 2026-09-20
- **主分類・副分類:** math.DG（主分類）; math.AG
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

Fano多様体がKähler–Einstein計量を持つことと、その接束が反標準偏極についてHermitian–Einstein計量を持つことは異なる。前者から後者は従うが逆は成立せず、本論文はその差をトーリックFanoの構成と分類によって調べる。

次数六del Pezzo曲面を射影直線の積の上でねじる構成により、次元$n\geq4$、Picard数$n+2$という高いPicard数でも安定接束を持つ例を与える。ねじれを表す根の和と対称性が、傾き安定性とKähler–Einstein性を別々に制御する。

有限次元の分類では、三・四次元の既知の安定性分類を再現し、五・六次元へ拡張する。さらにstrictly semistableからpolystableを選び出す積分解判定により、接束のHermitian–Einstein計量の存在を決定する。記事では計算結果を著者の報告として扱い、公開コードの再実行や証明全体の検証を行ったとはしない。

## 背景と問題設定

偏極は一貫して$-K\_X$である。Kobayashi–Hitchin対応により、$c\_1(X)$を表すKähler形式に関する接束のHermitian–Einstein性は傾き多重安定性と同値になる。一方、トーリックFanoのKähler–Einstein性はmoment polytopeの重心が零であることと同値である。

Klyachkoのフィルトレーションは傾き条件をrayの格子データの厳密比較へ帰着する。このため、両条件を同じ分類リスト上で比較できる。

## 主結果

### 安定性の分類（Theorem 1.1）

反標準偏極に関する接束の分類は次の通りである。

| 複素次元 | 安定 | strictly semistable | 不安定 | 総数 |
| --- | ---: | ---: | ---: | ---: |
| 3 | 4 | 7 | 7 | 18 |
| 4 | 26 | 24 | 74 | 124 |
| 5 | 109 | 82 | 675 | 866 |
| 6 | 636 | 366 | 6620 | 7622 |

三次元はSteffens、四次元はReynoldsの既知の分類であり、本論文の新しい拡張は五・六次元である。strictly semistableは半安定だが安定でないことを意味し、多重安定性とはまだ区別される。

### Hermitian–Einstein接束（Theorem 1.2）

三、四、五、六次元の順に、Hermitian–Einstein計量を接束上に持つ例の数はそれぞれ

$$
8,\quad40,\quad161,\quad895
$$

である。strictly semistableな接束がpolystableとなるのは、多様体が反標準安定な接束を持つ滑らかなトーリックFanoの非自明な積に分解する場合に限る。この積判定が分類を完成させる。

### 和が零の根によるねじれ（Theorem 1.3）

$A\_2$の非零の根$t\_1,\ldots,t\_k$からなる非空の多重集合が

$$
\sum\_i t\_i=0
$$

を満たすなら、対応するroot-twist多様体$X(t\_\bullet)$の接束は反標準安定である。これによりすべての$n\geq4$で、Picard数$n+2$の滑らかなトーリックFano $n$次元多様体の安定接束を得る。

この和零の場合、$X(t\_\bullet)$がKähler–Einsteinであるための必要十分条件は、多重集合が根の符号反転、または根六角形の位数三回転で不変であることである。

### 三つの無限族（Theorem 1.4）

単純根を$\alpha,\beta$とすると、反復する対$(\alpha,-\alpha)^{\times r}$（$r\geq1$）と三つ組$(\alpha,\beta,-(\alpha+\beta))^{\times m}$（$m\geq1$）は、それぞれ次元$2r+2$と$3m+2$の安定かつKähler–Einsteinな例を与える。

一方、

$$
((\alpha,-\alpha)^{\times s},\alpha,\beta),\qquad s\geq0
$$

は次元$2s+4$で接束が安定だがKähler–Einsteinでない例を与える。三族ともPicard数は$n+2$である。根の和が零であることは安定性の必要条件ではない。

## 証明の見取り図

接束の同変直和分解を、ray生成元が相補部分空間を張るような分割として記述する。ray matroidの連結成分が最細分解を与え、多様体の積分解と多重安定性を結び付ける。

root-twist族では、傾き不等式と重心計算を次数六del Pezzoのmoment六角形上の積分へ帰着する。和零の場合はcentered-box convolution評価から安定性を導く。有限分類は整数・有理数による厳密計算を行い、既知の低次元分類や内部整合性との比較で検証したとIntroductionは説明する。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2608.20411)
- **Introduction:** [PDF](https://arxiv.org/pdf/2608.20411v2) — Section 1, pp. 1–4（Section 2の前まで）；requested\_versionが空のため最新v2
- **Introduction中で言及された主要結果:** Theorems 1.1–1.4；Introductionで説明されるCorollary 5.3
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2608.20411v2
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
