---
layout: paper
title: Smooth limits of compact Kahler manifolds with vanishing first Chern class
title_ja: 第一Chern類が消えるKähler多様体の滑らかな極限
authors: Mu-Lin Li
arxiv_primary_category: math.CV
arxiv_categories:
- math.CV
arxiv_abstract: Let $π\colon X\toΔ$ be a proper holomorphic submersion from a smooth complex manifold onto the unit disc. Suppose that for every $t\inΔ^*$ the fiber $X_t$ is a compact Kahler manifold whose real first Chern class vanishes. We prove that the central fiber X_0 belongs to Fujiki's class $\cC$, that is, X_0 is bimeromorphic to a compact Kahler manifold.
topic: several-complex-variables
tags:
- chern-classes
- calabi-yau-geometry
- hyperkahler-geometry
- complex-analytic-spaces
- moduli
arxiv_id: 2611.11925v1
arxiv_url: https://arxiv.org/abs/2611.11925
arxiv_submitted: '2026-11-09'
arxiv_updated: '2026-11-09'
summary: 実第一Chern類が消えるコンパクトKähler多様体の滑らかな1パラメータ極限は、Fujiki類Cに属することを示す。中心ファイバーのKähler性や正則シンプレクティック形式を仮定せず、Beauville–Bogomolov分解の因子を族として延長して双有理的なKähler性を得る。
abstract_en: Let $π\colon X\toΔ$ be a proper holomorphic submersion from a smooth complex manifold onto the unit disc. Suppose that for every $t\inΔ^*$ the fiber $X_t$ is a compact Kahler manifold whose real first Chern class vanishes. We prove that the central fiber X_0 belongs to Fujiki's class $\cC$, that is, X_0 is bimeromorphic to a compact Kahler manifold.
summary_en: ''
abstract_ja: 円板上の固有正則沈め込みで、穴あき円板上の各ファイバーがコンパクトKählerかつ実第一Chern類零である場合を扱う。中心ファイバーがコンパクトKähler多様体と双有理同値になることを示す。結論はFujiki類Cへの所属であり、中心ファイバー自体がKählerになるという主張ではない。
abstract_source_url: https://arxiv.org/abs/2611.11925
license_name: Creative Commons Attribution 4.0 International (CC BY 4.0)
license_url: http://creativecommons.org/licenses/by/4.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2611.11925v1](https://arxiv.org/abs/2611.11925)
- **著者:** Mu-Lin Li
- **初回投稿日:** 2026-11-09
- **最終更新日:** 2026-11-09
- **主分類・副分類:** math.CV（主分類）; 副分類なし
- **ライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)

## 要約

滑らかな複素多様体の族で、近くのファイバーがすべてKählerでも、中心ファイバーがKählerになるとは限らない。Hironakaの例が示すこの障害を踏まえ、双有理的なKähler性、すなわちFujiki類$\mathcal C$への所属が残るかが問題となる。

本論文は、穴あき円板上の各ファイバーの実第一Chern類が零である場合に、この期待を証明する。中心ファイバーに正則シンプレクティック形式やstrongly Gauduchon計量をあらかじめ仮定しない。

鍵となるのは、一般ファイバーを有限étale被覆の後でトーラス、狭義Calabi–Yau、既約正則シンプレクティック因子へ分解し、その因子を族として中心まで延長することである。各種類の因子について異なる方法で双有理的なKählerモデルを得る。

## 背景と問題設定

$\pi:X\to\Delta$を滑らかな複素多様体から円板への固有正則沈め込みとし、$X\_t=\pi^{-1}(t)$と書く。Fujiki類$\mathcal C$はコンパクトKähler多様体と双有理同値なコンパクト複素多様体の類である。Introductionは、Hermitian形式を下から支配する閉正$(1,1)$-カレント、すなわちKählerカレントの存在によっても特徴付けられると説明する。

Conjecture 1.1は、すべての$t\ne0$で$X\_t$がKählerなら$X\_0\in\mathcal C$となるという一般予想である。射影・Moishezonファイバーの場合にはSiu、Popovici、Barlet、Rao–Tsai、Raoらによる関連する特殊化の結果があるが、本論文は実第一Chern類零のKählerファイバーを対象とする。

## 主結果

### 主定理：第一Chern類零の場合の特殊化（Theorem 1.2）

$\pi$のファイバーが連結で、すべての$t\in\Delta^\ast $について

$$
X\_t\text{ はKähler},\qquad c\_1(X\_t)=0\ \text{in }H^2(X\_t,\mathbb R)
$$

ならば

$$
X\_0\in\mathcal C
$$

が成り立つ。したがって中心ファイバーはコンパクトKähler多様体と双有理同値である。

仮定は実コホモロジーにおける第一Chern類の消滅であり、最初から全ファイバーの標準束の自明化を指定するものではない。中心ファイバーのKähler性も結論に含めない。本定理は一般のConjecture 1.1のうち$c\_1=0$の場合を解決する結果である。

Introductionは、中心ファイバーに正則シンプレクティック形式を仮定せずにSoldatenkov–Verbitskyの滑らかな特殊化の問題へ答える点、および中心にstrongly Gauduchon計量を仮定したLiu–Shenの結果との違いを強調する。

## 証明の見取り図

有限étale被覆への移行はFujiki類への所属を変えない。著者はその被覆上でBeauville–Bogomolov因子を穴あき円板上の大域的な族へまとめ、相対積を中心まで延長する。極限の因子形式が定める正則葉層の葉空間を使い、延長されたコホモロジー類による葉の体積の有界性とBishopのコンパクト性から固有性を得る。

次に各因子の最高次数の周期とその共役との組合せを延長し、二次コホモロジーのHodge分解から体積一定の動くKähler類を作る。パラメータに一様な質量評価とRicci平坦計量に対するBochner原理によって、正規化した因子形式に中心沿いの極がないことを示す。

トーラス因子はトーラスとして延長する。中間次数の正則形式が消える単連結因子では、整数Kähler類を線束へ延長してRiemann–Rochを用い、中心をMoishezonとする。既約正則シンプレクティック因子では、Picard数零への摂動、周期写像の全射性、エネルギー有界な正則写像の有理型コンパクト性を用いて、中心をhyperkähler多様体と双有理同値にする。この三種類の処理を相対積と組み合わせる。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2611.11925)
- **Introduction:** [PDF](https://arxiv.org/pdf/2611.11925v1) — Section 1, pp. 1–3（Section 2より前）
- **Introduction中で言及された主要結果:** Conjecture 1.1; Theorem 1.2; IntroductionによるTheorems 4.4, 5.4の説明
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2611.11925v1
- **確認したライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)
- **source\_scope:** Abstract and Introduction
