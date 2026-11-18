---
layout: paper
title: Singular Kähler-Ricci solitons and complete gradient shrinking Kähler-Ricci solitons on non-compact manifolds
title_ja: 特異ソリトンの極限による非コンパクトKähler–Ricci縮小ソリトンの構成
authors: Feng Wang, Xiaohua Zhu
arxiv_primary_category: math.DG
arxiv_categories:
- math.DG
arxiv_abstract: We construct a class of complete gradient shrinking Kähler-Ricci solitons on non-compact toric manifolds by exhausting a family of singular Kähler-Ricci solitons associated to multiple divisors. The construction method will be also extended on non-compact $\mathbf G$-manifolds.
topic: differential-geometry
tags:
- kahler-ricci-flow-solitons
- noncompact-kahler-geometry
- toric-geometry
- monge-ampere-equations
arxiv_id: 2611.21051v1
arxiv_url: https://arxiv.org/abs/2611.21051
arxiv_submitted: '2026-11-16'
arxiv_updated: '2026-11-16'
summary: parabolic Fano polytope coneに対応する非コンパクトトーリック多様体上で、完備な勾配縮小Kähler–Ricciソリトンを構成する。コンパクト化上の特異ソリトンを用いた尽くし上げと一様評価により、トーラス軌道上の極限を多様体全体へ延長する。
abstract_en: ''
summary_en: The paper approaches noncompact shrinking solitons through metrics on a compactification. Singular soliton equations with increasing divisor data provide an exhaustion whose limit lives on the open manifold. Under a parabolic condition on the toric polytope, analytic estimates yield a smooth complete metric. The introduction separates this theorem from the proposed extension to more general positive cones.
abstract_ja: 非コンパクト空間上でソリトン方程式を直接解く代わりに、因子を付加したコンパクト化上で特異な計量の族を構成する。この族の極限を制御することで、特定のトーリック多様体に完備な縮小ソリトンを与える。Introductionではparabolicな条件が収束と延長に必要であり、より広いpositive Fano coneへの拡張は予想として区別される。
abstract_source_url: https://arxiv.org/abs/2611.21051
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2611.21051v1](https://arxiv.org/abs/2611.21051)
- **著者:** Feng Wang, Xiaohua Zhu
- **初回投稿日:** 2026-11-16
- **最終更新日:** 2026-11-16
- **主分類・副分類:** math.DG（主分類）; 副分類なし
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

勾配縮小RicciソリトンはRicci流の特異点を拡大して得られる標準的なモデルの一つである。しかし非コンパクトな完備例の構成は、拡大・定常ソリトンの場合とは異なる強い制約を伴う。

本論文は、大きな対称性を持つ非コンパクトKähler多様体に対して、偏微分方程式を用いた構成法を与える。開多様体をコンパクト化から因子を除いた空間として表し、そこで増大するKähler類と因子に対応する特異ソリトンを解く。

得られる族の極限をトーラス軌道上で構成し、その後に多様体全体への滑らかな延長と完備性を示す。主定理はparabolic Fano polytope coneという特定の条件の下で成立する。一般のpositive Fano coneまで拡張することは、Introductionでは予想として述べられている。

## 背景と問題設定

非コンパクトKähler曲面では、Feldman–Ilmanen–Knopfの例や、$\mathbb{CP}^1\times\mathbb C$ の一点blow-up上のBamler–Cifarelli–Conlon–Deruelleの例が構造理解の重要な手掛かりになってきた。本論文は、常微分方程式による個別構成とは異なる尽くし上げの方法を用いる。

$M=\overline M\setminus D$ とし、$\overline M$ はコンパクトトーリック多様体、$D$ は原論文の条件を満たす非負のトーリック因子とする。対応する非コンパクト多面体 $P$ について、ある $A\_0\in\mathbb R^n$ と $c\_0>0$ が存在して、十分遠方で

$$
\langle A\_0,y\rangle\le-c\_0
$$

となる条件をpositiveと呼ぶ。さらに座標を取ったときの射影

$$
P'=\lbrace x'\in\mathbb R^{n-1}:\text{ある }x\_n\text{ に対して }(x',x\_n)\in P\rbrace
$$

が有界となる特別な場合をparabolicと呼ぶ。これは原論文のFano polytope coneの設定の一部であり、任意の凸集合にこの射影条件だけを課した定理ではない。

## 主結果

### 完備な縮小ソリトンの存在（Theorem 1.1）

parabolic Fano polytope cone $P$ に対応する非コンパクトトーリック多様体 $M^n$ には、無限体積の勾配縮小Kähler–Ricciソリトンがトーラス軌道上に存在し、$M$ 全体の完備なソリトンへ延長できる。

新規性は、非コンパクト空間上の方程式を初めから大域的に解かず、同じコンパクト化上の特異計量の族から構成する点にある。Introductionは、parabolic条件を極限への収束と全体への延長の双方で使用すると明記する。

### 拡張の範囲と未解決部分

Introductionでは概略として次のように述べられている。同じ考え方は非コンパクト $\mathbf G$ 多様体にも拡張され、parabolic Fano coneの場合がTheorem 8.9で扱われる。詳しい仮定はIntroductionに完全には記載されていないため、ここでは定理の厳密な再構成は行わない。任意のpositive Fano coneでの存在は予想であり、証明済みの主定理と区別される。

## 証明の見取り図

まずコンパクト化上で、大きなKähler類 $\Omega\_k$ と多重因子 $kD$ に対応する特異Kähler–Ricciソリトンを作る。トーリック対称性によって実Monge–Ampère方程式に帰着し、変分法と特異計量の正則性理論を用いる。

次に凸ポテンシャルの各種先験評価から、トーラス軌道上で極限計量を得る。最後に、境界因子の小近傍を除いた領域で背景計量に対する局所一様な $C^2$ 評価を確立し、極限の大域的正則性と完備性を導く。これらはIntroductionが説明する証明の経路であり、後続節の技術的評価を独立に検証したものではない。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2611.21051)
- **Introduction:** [PDF](https://arxiv.org/pdf/2611.21051v1) — Section 1, pp. 2–3
- **Introduction中で言及された主要結果:** Theorem 1.1; Theorems 5.2, 8.9とConjecture 8.4への言及
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2611.21051v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
