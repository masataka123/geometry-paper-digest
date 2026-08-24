---
layout: paper
title: "Irregularities of special C-pairs"
title_ja: "特殊C対の不正則度"
authors: "Stefan Kebekus, Erwan Rousseau, Frédéric Touzet"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
arxiv_abstract: >-
  This paper studies irregularity-type invariants of special C-pairs, or "geometric orbifolds" in the sense of Campana. Under mild assumptions on the singularities, we show that the augmented irregularity of a C-pair (X,D) is bounded by its dimension. This generalizes earlier results of Campana, and strengthens known results even in the classic case where X is a projective manifold and D = 0. The proof builds on new extension results for adapted forms, analysis of foliations on Albanese varieties, and constructions of Bogomolov sheaves using strict wedge subspaces of adapted forms.
topic: algebraic-geometry
tags:
  - singularities
  - foliations
  - vector-bundles-sheaves
arxiv_id: "2601.07318v1"
arxiv_url: "https://arxiv.org/abs/2601.07318"
arxiv_submitted: "2026-01-12"
arxiv_updated: "2026-01-12"
summary: >-
  Campanaの特殊C対について、適合1形式で測る増大不正則度が次元以下になることを示す。局所一意化可能なコンパクトKähler対または射影的dlt対を扱い、通常の滑らかな射影多様体でも有限エタール被覆を越える強化を与える。
abstract_en: ""
summary_en: >-
  The paper bounds the augmented irregularity of a special Campana pair by the dimension of its underlying space under local uniformizability or dlt assumptions. Its notion of irregularity uses adapted reflexive one-forms on arbitrary covers, rather than only ordinary forms on finite étale covers. An extension theorem for adapted forms and a foliation on the Albanese variety of a suitable cover are key ingredients. Strict wedge subspaces then produce the positivity obstruction that specialness rules out.
abstract_ja: >-
  Campanaの幾何学的オービフォールドである特殊C対の不正則度型不変量を研究する。特異点に穏やかな仮定を置くと、C対の増大不正則度がその次元以下であることを示す。この結論はCampanaの先行結果を一般化し、$X$が射影多様体かつ$D=0$の場合にも既知結果を強める。証明には適合形式の新しい拡張定理、Albanese多様体上の葉層の解析、適合形式のstrict wedge部分空間からのBogomolov層の構成を用いる。
abstract_source_url: "https://arxiv.org/abs/2601.07318"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2601.07318](https://arxiv.org/abs/2601.07318)
- **著者:** Stefan Kebekus, Erwan Rousseau, Frédéric Touzet
- **初回投稿日:** 2026年1月12日
- **最終更新日:** 2026年1月12日
- **主分類・副分類:** math.AG
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

Campanaの特殊多様体は、一般型の幾何学的オービフォールドを支配しない多様体として捉えられる。滑らかな射影多様体では、不正則度 $q(X)=h^0(X,\Omega_X^1)$ と有限エタール被覆上のその上限が $dim X$ 以下になることが知られていた。

本論文は境界をもつC対 $(X,D)$ に移り、被覆 $\gamma:\widehat X\to X$ 上の適合反射的1形式から定まる不正則度 $q(X,D,\gamma)$ と、その全被覆にわたる上限 $q^+(X,D)$ を扱う。主張は、局所一意化可能なコンパクトKähler対または射影的dlt対が特殊ならば、この上限が次元を超えないというものである。

これは有限エタール被覆だけでなく一般の被覆を許すため、$D=0$ の滑らかな射影的場合にもCampanaの古典的結果より強い。dlt対上の適合反射的1形式の拡張定理も独立した結果として得られる。

## 背景と問題設定

コンパクトC対と被覆 $\gamma$ に対し、Introductionは

$$
q(X,D,\gamma):=h^0\!\left(\widehat X,\Omega^{[1]}_{(X,D,\gamma)}\right),\qquad
q^+(X,D):=\sup_\gamma q(X,D,\gamma)
$$

と定義する。通常のAlbanese写像に相当する「適合Albanese写像」は一般には存在せず、不正則度とAlbanese多様体の次元の古典的等式も崩れる点が障害となる。

## 主結果

### 主定理（Theorem 1.3）

特殊C対 $(X,D)$ が、(i) $X$ はコンパクトKählerで対が局所一意化可能、または (ii) $X$ は射影的で対がdlt、のいずれかを満たすならば

$$
q^+(X,D)\leq \dim X
$$

が成り立つ。MMPに現れるdlt対を含むと同時に、境界なしの滑らかな場合にも被覆の範囲を拡張する結果である。

### 適合形式の拡張（Theorem 1.6）

代数的準射影dlt C対では、適合反射的1形式が特異点解消へ対数的に拡張する。この拡張性が、特異な対に対して滑らかな幾何の議論を接続する基盤となる。

### 系（Corollary 1.7）

射影的dlt C対が特殊で、任意の被覆上の適合1形式層に含まれる階数1の連接層 $\mathscr L$ を取ると、C-Kodaira–Iitaka次元は $\kappa_C(\mathscr L)<1$ となる。

## 証明の見取り図

適切な被覆の通常のAlbanese多様体を用い、適合微分形式がそこに定める葉層を調べる。葉がZariski稠密になり得るため、古典的なAlbanese写像の全射性だけでは足りない。そこで一般化Castelnuovo–de Franchis型の発想とstrict wedge部分空間を使ってBogomolov層を構成し、次元を超える適合1形式が特殊性と両立しない正値性を生むことを示す。

## 原論文との対応

- **Abstractページ:** [arXiv:2601.07318](https://arxiv.org/abs/2601.07318)
- **Introduction:** Section 1, pp. 1–3
- **Introduction中で言及された主要定理番号:** Conjecture 1.1, Theorems 1.3 and 1.6, Corollary 1.7
- **論文構成の説明:** Contents, p. 1
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
