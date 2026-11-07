---
layout: paper
title: $P=W$ via $\mathcal{H}_2$
title_ja: Hamiltonベクトル場の作用によるP=W予想の証明
authors: Tamas Hausel, Anton Mellit, Alexandre Minets, Olivier Schiffmann
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
- math.DG
- math.RT
arxiv_abstract: Let $\mathcal{H}_2$ be the Lie algebra of polynomial Hamiltonian vector fields on the symplectic plane. Let $X$ be the moduli space of stable Higgs bundles of fixed relatively prime rank and degree, or more generally the moduli space of stable parabolic Higgs bundles of arbitrary rank and degree for a generic stability condition. Let $H^*(X)$ be the cohomology with rational coefficients. Using the operations of cup-product by tautological classes and Hecke correspondences we construct an action of $\mathcal{H}_2$ on $H^*(X)[x,y]$, where $x$ and $y$ are formal variables. We show that the perverse filtration on $H^*(X)$ coincides with the filtration canonically associated to $\mathfrak{sl}_2\subset \mathcal{H}_2$ and deduce the $P=W$ conjecture of de Cataldo-Hausel-Migliorini.
topic: algebraic-geometry
tags:
- higgs-nonabelian-hodge
- hodge-theory
- moduli
- vector-bundles-sheaves
- symplectic-contact-geometry
arxiv_id: 2209.05429v3
arxiv_url: https://arxiv.org/abs/2209.05429
arxiv_submitted: '2022-09-12'
arxiv_updated: '2026-11-03'
summary: Higgs束モジュライのperverse filtrationを、tautological類とHecke対応から作るLie代数作用で記述する。階数と次数が互いに素な場合、および一般の安定性条件をもつ放物的場合にP=Wを導く。
abstract_en: ''
summary_en: The two algebraic realizations of the nonabelian Hodge correspondence carry apparently different filtrations on cohomology. This paper recovers the perverse filtration using operators arising from Hecke correspondences and tautological classes. An embedded sl2 action identifies it with the Chern filtration, giving the weight filtration on the Betti side. The construction also produces a Hamiltonian-vector-field action after adjoining two formal variables.
abstract_ja: 安定Higgs束のモジュライ空間に対し、tautological類のカップ積とHecke対応からLie代数作用を構成する。その中のsl2作用に付随するfiltrationがHitchin写像のperverse filtrationと一致することを示し、Chern類による記述を介してP=W予想を証明する。非放物的場合には階数と次数が互いに素であることを仮定し、放物的場合には一般の安定性条件の下で任意の階数・次数を扱う。
abstract_source_url: https://arxiv.org/abs/2209.05429
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2209.05429v3](https://arxiv.org/abs/2209.05429)
- **著者:** Tamas Hausel, Anton Mellit, Alexandre Minets, Olivier Schiffmann
- **初回投稿日:** 2022-09-12
- **最終更新日:** 2026-11-03
- **主分類・副分類:** math.AG（主分類）; math.DG, math.RT
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

非可換Hodge対応は、曲線上のHiggs束のモジュライと局所系のモジュライを微分同相によって結ぶ。しかし二つの空間の代数幾何は異なり、局所系側の混合Hodge構造の重みをHiggs束側でどのように見るかは自明ではない。P=W予想は、その重みがHitchin写像に付随するperverse filtrationで説明できると主張する。

本論文は、tautological類とHecke対応が作る作用素の代数を通じて、この一致を証明する。まずperverse filtrationをChern類の重みだけで記述するP=Cを示し、既知の重みfiltrationの記述と合わせてP=Wを得る。

重要な工夫は、Higgs束の一点での修正がHitchin写像と両立することを、具体的なsl2作用へ高める点にある。ただし修正が安定性を保つとは限らないため、放物的モジュライと楕円的部分を経由する。通常のHiggs束だけで閉じた証明ではなく、両者を同時に扱うことが本質的である。

## 背景と問題設定

$C$ を種数 $g$ の滑らかな複素射影曲線、$r>0$ と $d$ を互いに素な整数とする。$M\_{r,d}$ は安定Higgs束 $(E,\theta)$、$\theta:E\to E\otimes\Omega\_C$ のモジュライである。非可換Hodge対応によりtwisted局所系のモジュライ $M\_{r,d}^{\mathrm{Betti}}$ と対応する。

Hitchin写像は $\theta$ の特性多項式を記録する固有写像であり、その分解定理からperverse filtration $P$ が得られる。一方Betti側には重みfiltration $W$ がある。論文の添字規約では $N=(g-1)r^2+1$ とし、比較式を

$$
P\_{i-N}H^\ast (M\_{r,d})=W\_{2i}H^\ast (M\_{r,d}^{\mathrm{Betti}})
$$

と書く。添字のずれと重みの係数 $2$ は、両filtrationの正規化の違いを表す。

## 主結果

### Chern類によるperverse filtrationの記述（§1.1のP=C定理）

$P\_mH^\ast (M\_{r,d})$ は、総重みが $2(m+N)$ 以下のtautological類の積で張られる。普遍束の第 $i$ Chern類のKünneth成分には重み $2i$ を与える。

したがって、幾何学的にはHitchin写像のファイバーの振る舞いに依存するfiltrationが、普遍束のChern類の重みという明示的なデータから復元できる。

### P=Wと放物的拡張（§1.1の系）

上記の $M\_{r,d}$ でP=Wが成り立つ。さらに、一般の安定性条件を選んだ安定放物的Higgs束のモジュライでは、階数と次数を互いに素と仮定せずに対応する結果を得る。

これは任意の非互いに素な通常のHiggs束モジュライまで同じ主張を無条件に広げたものではない。IntroductionはMaulik–Shenおよびその後の別証明にも言及しており、本論文の特徴は作用素代数を用いる証明経路にある。

### 平面上のHamiltonベクトル場の作用（§1.3の定理）

平面の多項式Hamiltonベクトル場のLie代数 $\mathcal H\_2$ は、Hamiltonian $x^my^n$ に対応する

$$
V\_{m,n}=ny^{n-1}x^m\frac\partial{\partial x}-mx^{m-1}y^n\frac\partial{\partial y}
$$

をもち、括弧は

$$
[V\_{m,n},V\_{m',n'}]=(m'n-mn')V\_{m+m'-1,n+n'-1}
$$

で与えられる。論文はこれを $H^\ast (M)[x,y]$ に作用させ、tautological作用素 $\psi\_n(1)$ をHamiltonian $y^n$ に対応させる。

二つの形式変数の付加は不可欠である。$\mathcal H\_2$ は非零の有限次元表現をもたないため、有限次元の $H^\ast (M)$ 自体へ同じ非自明作用を直接作るという主張ではない。

## 証明の見取り図

Hecke対応はスペクトル曲線を変えず、Hitchin写像と両立する。まず曲面上の零次元層のcohomological Hall algebraとそのFock表現を使い、tautological類への作用を具体化する。多項式性と退化、Weyl reductionを通じて、必要なsl2三つ組を含む小さい代数へ移る。

半安定性がHecke修正で壊れる問題は、スペクトル曲線が被約かつ既約となる楕円的部分に制限することで避ける。放物的設定は、この制限によるコホモロジー情報の喪失を防ぐ役割を担う。得られたsl2作用の上昇作用素を相対的豊富類のカップ積とそろえると、相対hard Lefschetz理論がperverse filtrationを決め、tautological類の重みと一致する。

最後に放物的・非放物的モジュライ間の帰着を用いて所望の空間へ戻る。Introductionで述べられる、より大きなCoHAを使ってこの経路を簡略化する可能性やPGL型への拡張は、今後の見通しとして区別される。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2209.05429)
- **Introduction:** [PDF](https://arxiv.org/pdf/2209.05429v3) — Section 1, pp. 1–6（Section 2開始直前まで）
- **Introduction中で言及された主要結果:** P=C theorem and P=W corollary in §1.1; action theorem in §1.3（Corollary 7.6, Proposition 8.6, Remark 8.15）
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2209.05429v3
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
