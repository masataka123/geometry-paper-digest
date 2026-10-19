---
layout: paper
title: Seven ordered points and the nonexistence of arithmetic ball quotient compactifications
title_ja: 順序付き7点のGIT商が算術的複素球商のコンパクト化にならないこと
authors: Ryunosuke Nakano, Hisato Matsukawa
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
- math.CV
- math.NT
arxiv_abstract: 'We prove that the ordered GIT quotient of seven points on $\mathbb P^1$ with equal weights is not isomorphic to the Baily--Borel compactification of any arithmetic complex ball quotient. Together with our companion paper and the known positive examples, this determines the equal weight case for every $n\ge6$: such a realization exists precisely for $n=6,8$. The lattice and the algebraic isomorphism are unrestricted, and torsion and divisorial ramification are allowed. The proof combines arithmetic reductions with identities involving Chern classes of fixed subvarieties and intersection inequalities for nef divisors on the GIT quotient. The final comparison includes all fixed components and requires no bound on the degree of an individual fixed curve.'
topic: algebraic-geometry
tags:
- uniformization
- chern-classes
- moduli
- positivity
arxiv_id: 2610.23227v1
arxiv_url: https://arxiv.org/abs/2610.23227
arxiv_submitted: '2026-10-16'
arxiv_updated: '2026-10-16'
summary: 射影直線上の順序付き7点の等重みGIT商は、どの算術的複素球商のBaily–Borelコンパクト化とも同型にならないことを示す。格子の捩れや因子に沿う分岐を許し、既知の例と関連論文を合わせることで、6点以上の等重みの場合は6点と8点だけが実現可能となる。
abstract_en: ''
summary_en: The question concerns the algebraic variety obtained from seven labelled points on the projective line. The authors rule out every arithmetic ball-quotient realization of its Baily–Borel type, including realizations with torsion and branching. Their comparison combines the configuration quotient with the geometry of fixed loci of the arithmetic group. Together with a companion theorem and known constructions, this settles which equal-weight quotients with at least six labels admit such a realization.
abstract_ja: 著者らは、7点の等重み配置空間について、特定の周期写像に依存しない算術的球商としての実現不可能性を証明する。固定部分多様体のChern類の関係式と、配置空間のnef因子の交点条件を比較する。固定曲線ごとの次数に一律の上限を置かず、内部の固定点やカスプも含む全成分を扱うことが議論の特徴である。
abstract_source_url: https://arxiv.org/abs/2610.23227
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.23227v1](https://arxiv.org/abs/2610.23227)
- **著者:** Ryunosuke Nakano, Hisato Matsukawa
- **初回投稿日:** 2026-10-16
- **最終更新日:** 2026-10-16
- **主分類・副分類:** math.AG（主分類）; math.CV, math.NT
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

射影直線上の点配置のモジュライが複素球の商として表される現象は、Deligne–Mostow理論の重要な例である。しかし、ある周期写像の構成条件を満たさないことだけでは、その代数多様体が別の方法で球商として実現される可能性は除けない。

本論文は順序付き7点の等重みGIT商について、算術格子を任意に選んでもBaily–Borelコンパクト化として実現できないことを示す。ラベルを置換する対称群ではさらに割らず、ラベルを保った配置空間そのものが対象となる。

格子の捩れ、鏡映による分岐、有限指数の違いも許される。既知の6点・8点の正の例と、9点以上を扱う関連論文を組み合わせると、6点以上の等重み配置の分類が得られる。非算術格子や別種のコンパクト化まで否定する結果ではない。

## 背景と問題設定

対象は

$$
X\_7=(\mathbb P^1)^7\mathbin{//}\_{\mathcal O(1,\ldots,1)}\operatorname{SL}(2,\mathbb C)
$$

である。商の複素次元は4であり、比較する球は$\mathbb B^4$となる。上付き$\mathrm{BB}$はBaily–Borelコンパクト化を表す。論文の問いは、与えられた周期写像の像を調べるものではなく、任意の代数的同型の存在を問う。

## 主結果

### 主定理（Theorem 1.1）

算術格子$\Gamma\subset\operatorname{PU}(1,4)$に対する代数的同型

$$
X\_7\simeq(\mathbb B^4/\Gamma)^{\mathrm{BB}}
$$

は存在しない。同型がラベルの対称性を保存するという仮定も、分岐因子をあらかじめ指定する仮定も置かない。特定の部分群や一つのカスプだけを扱うのではなく、元の格子全体を保持して非存在を導く点が重要である。

### 等重みの場合の分類（Corollary 1.2）

$n\geq6$とし、$X\_n=(\mathbb P^1)^n\mathbin{//}\_{\mathcal O(1,\ldots,1)}\operatorname{SL}(2,\mathbb C)$とする。このとき、$X\_n$が算術的複素球商のBaily–Borelコンパクト化となることと

$$
n\in\lbrace6,8\rbrace
$$

は同値である。6点・8点の実現は既知の算術的Deligne–Mostow商による。7点の排除が本論文、9点以上の排除が関連論文によるものであり、全てを本論文単独の新結果とするものではない。

## 証明の見取り図

まず余コンパクトな格子と、適切な体上にない非一様格子を除く。Gaussianの場合にはカスプ幾何から実際の鏡映根のノルム条件を得て、同じ群全体が保存する自己双対格子を構成する。分岐の指標と35個の点一致平面上の次数を用いて、Introductionで記されるnef条件

$$
L-\frac{3}{2}H\quad\text{is nef}
$$

へ進む。ここで$L$は保型直線束の第一Chern類、$H$はこの配置空間の反標準類である。

最後に、固定曲面・曲線・内部固定点・カスプを一括して比較する。固定集合について平均したChern類の関係式は三角形の連立系を与え、逆変換は二項変換となる。商写像の微分の行列式から得られる別の関係を、有限指標と実際のカスプ幅を保ったまま組み合わせ、配置空間のnef錐と矛盾させる。個々の固定曲線に次数上限を仮定しない点が従来の限定的な比較との違いである。

## 原論文との対応

- **Abstractページ:** [Seven ordered points and the nonexistence of arithmetic ball quotient compactifications](https://arxiv.org/abs/2610.23227)
- **Introduction:** [PDF](https://arxiv.org/pdf/2610.23227v1) — Section 1, pp. 1–2
- **Introduction中で言及された主要結果:** Theorem 1.1, Corollary 1.2
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2610.23227v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
