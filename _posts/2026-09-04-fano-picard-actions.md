---
layout: paper
title: "Actions on the Picard group of smooth Fano threefolds"
title_ja: "滑らかなFano三次元多様体のPicard群への作用"
authors: "Shreya Sharma"

arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
arxiv_abstract: >-
  We classify the possible images of the action of the group of automorphisms of a smooth Fano threefold on its Picard group. We also study the first group cohomology of the Picard group for families of smooth Fano threefolds.
topic: algebraic-geometry
tags:
  - fano-varieties
arxiv_id: "2511.12447v2"
arxiv_url: "https://arxiv.org/abs/2511.12447"
arxiv_submitted: "2025-11-16"
arxiv_updated: "2026-09-03"
summary: >-
  滑らかなFano三次元多様体の自己同型群がPicard群に誘導する作用の像を、Mori--Mukaiの変形族ごとに分類する。Picard数5以下では、この作用とMatsukiのWeyl群の比較から、任意の有限自己同型群について一次群コホモロジーが消えることも示す。
abstract_en: ""
summary_en: >-
  This work determines how automorphisms of smooth complex Fano threefolds can act on their Picard groups across the classified deformation families. Matsuki's Weyl groups provide upper bounds, and explicit examples show that these bounds are attained apart from stated exceptional families. As an application, the first cohomology of the Picard lattice vanishes for every finite automorphism group when the Picard rank is at most five.
abstract_ja: >-
  滑らかなFano三次元多様体について、自己同型群がPicard群に誘導する作用の像を分類する。さらに、滑らかなFano三次元多様体の各族に対し、Picard群の一次群コホモロジーを調べる。
abstract_source_url: "https://arxiv.org/abs/2511.12447"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2511.12447](https://arxiv.org/abs/2511.12447)
- **著者:** Shreya Sharma
- **初回投稿日:** 2025年11月16日
- **最終更新日:** 2026年9月3日
- **主分類・副分類:** math.AG（主分類）
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

滑らかなFano三次元多様体は105の変形族に分類されているが、その自己同型群の完全な把握は難しい。本論文は、自己同型群そのものではなく、自然な準同型

$$
\operatorname{Aut}(X)\longrightarrow\operatorname{Aut}(\operatorname{Pic}(X))
$$

の像 $\operatorname{Aut}_{P}(X)$ を全変形族について決定する問題を扱う。

主要な比較対象は、反標準円錐の相対極小モデルが与えるKKMR分解を保つMatsukiのWeyl群 $W_X^G$ である。自己同型がPicard群に誘導する作用は常に $W_X^G$ に含まれ、大多数の族ではWeyl群自体が自明である。

非自明な場合には、具体的な滑らかなメンバーと自己同型を構成して上界が実現されることを示す。例外を明示したこの分類から、Picard数5以下の滑らかなFano三次元多様体では、任意の有限部分群 $G\subset\operatorname{Aut}(X)$ に対して $H^1(G,\operatorname{Pic}(X))=0$ が従う。

## 背景と問題設定

連結成分 $\operatorname{Aut}^0(X)$ はPicard群に自明に作用するため、$\operatorname{Aut}_{P}(X)$ は自己同型群の離散的な情報を取り出す。この作用はMori錐の組合せ的構造を保ち、Amitsur部分群、商stackのBrauer群、$H^1(G,\operatorname{Pic}(X))$ などの安定同変双有理不変量の計算にも関わる。

MatsukiのWeyl群は、$X$ の標準束全空間から反標準円錐への射に対する可動錐のKKMR chamber分解を保つPicard格子の自己同型として定義される。IntroductionのProposition 3.3は

$$
\operatorname{Aut}_{P}(X,G)\subset W_X^G
$$

を与え、分類問題を有限個の非自明なWeyl群を持つ族へ帰着させる。

## 主結果

### Picard作用の分類（Theorem 1.1）

各Fano三次元多様体の変形族には、

$$
\operatorname{Aut}_{P}(X)=W_X^G
$$

を満たす滑らかなメンバー $X$ が存在する。ただし族 №2.2, №6.1, №7.1, №8.1, №9.1, №10.1 は例外である。№2.2では二つの極端半直線の型が異なるため自己同型は両者を交換できず、$\operatorname{Aut}_{P}(X)=0$ である一方、$W_X^G\cong\mathbb Z/2\mathbb Z$ となる。Picard数6以上の例外は $\mathbb P^1$ と次数5以下のdel Pezzo曲面との積であり、誘導される作用は通常、対応する根系のWeyl群より小さい。

### 一次群コホモロジーの消滅（Theorem 1.3）

$X$ をPicard数 $\rho\leq5$ の滑らかなFano三次元多様体、$G\subset\operatorname{Aut}(X)$ を有限群とすると、

$$
H^1(G,\operatorname{Pic}(X))=0
$$

が成り立つ。これは自己同型によって実際に生じ得るPicard格子作用を分類したことの帰結である。

## 証明の見取り図

まず標準束全空間上へ自己同型を持ち上げ、相対極小モデルのnef coneを別のchamberへ送ることから、Picard作用がMatsukiのWeyl群に含まれることを示す。Weyl群が非自明な各族については、積射影空間内の超曲面、blow-up、二重被覆などのMori--Mukai表示を使い、例外因子やPicard群の生成元を置換する具体的自己同型を構成する。最後に得られた有限群作用を族ごとに調べ、一次群コホモロジーの消滅へつなげる。

## 原論文との対応

- **Abstractページ:** [arXiv:2511.12447](https://arxiv.org/abs/2511.12447)
- **Introduction:** Section 1, pp. 1–3
- **Introduction中で言及された主要定理番号:** Theorems 1.1, 1.3; Proposition 3.3
- **論文構成の説明:** Introduction, p. 3
- **確認したarXivバージョン:** v2
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
