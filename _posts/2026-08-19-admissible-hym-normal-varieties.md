---
layout: paper
title: "Admissible Hermitian-Yang-Mills connections over normal varieties"
title_ja: "正規多様体上の許容Hermitian–Yang–Mills接続"
authors: "Xuemiao Chen"
arxiv_primary_category: "math.DG"
arxiv_categories:
  - math.DG
  - math.AG
arxiv_abstract: >-
  In this paper, we first prove a complete version of the Donaldson-Uhlenbeck-Yau theorem over normal varieties, including normal Kaehler varieties and projective normal varieties with multiple polarizations. In particular, this gives the polystability of reflexive sheaves under symmetric and exterior powers and tensor products. As a consequence of the singular Donaldson-Uhlenbeck-Yau theorem, the complete Hitchin-Kobayashi correspondence over normal varieties smooth in codimension two is built by showing that an admissible Hermitian-Yang- Mills connection defines a polystable reflexive sheaf. Furthermore, it is shown that the Hermitian-Yang-Mills connection gives a lower bound for the discriminants of any Kaehler resolutions, which gives a Bogomolov-Gieseker inequality over normal varieties and a characterization of the equality using projectively flat connections. We discuss typical cases including normal surfaces and varieties smooth in codimension two where we could simplify the Bogomolov-Gieseker inequality and endow it with topological meanings. We also prove the Bogomolov-Gieseker inequality for semistable reflexive sheaves and characterize the class of semistable sheaves that satisfy the Bogomolov-Gieseker equality. Finally, as another application, we give a new criteria for when a normal Kaehler variety with trivial first Chern class is a finite quotient of torus.
topic: differential-geometry
tags:
  - singularities
  - vector-bundles-sheaves
  - stability
  - hermite-einstein-metrics
  - chern-classes
arxiv_id: "2205.12305v4"
arxiv_url: "https://arxiv.org/abs/2205.12305v4"
arxiv_submitted: "2022-05-24"
arxiv_updated: "2025-02-09"
summary: >-
  正規Kähler多様体上の安定反射層に許容Hermitian–Yang–Mills計量が一意に存在するという特異Donaldson–Uhlenbeck–Yau定理を、多重偏極を含む形で証明する。そこから余次元2で滑らかな場合のHitchin–Kobayashi対応と、解消上のdiscriminantによるBogomolov–Gieseker不等式・等号条件を導く。
abstract_en: ""
summary_en: >-
  This work extends the Donaldson–Uhlenbeck–Yau theorem to stable reflexive sheaves on normal varieties, including a multi-Kähler polarization setting. In the case where the base is smooth in codimension two, it also establishes the converse direction and hence a set-level Hitchin–Kobayashi correspondence. The resulting admissible Hermitian–Yang–Mills connection controls a discriminant defined through Kähler resolutions, producing Bogomolov–Gieseker inequalities and projective-flatness criteria. Applications include semistable sheaves and a torus-quotient criterion for certain normal Kähler varieties.
abstract_ja: >-
  正規Kähler多様体および多重偏極を備えた射影的正規多様体について、Donaldson–Uhlenbeck–Yau定理を証明する。対称冪・外冪・tensor積に対する反射層のpolystabilityが従い、余次元2で滑らかな正規多様体では完全なHitchin–Kobayashi対応を構成する。さらに許容Hermitian–Yang–Mills接続から解消上のdiscriminantの下界、Bogomolov–Gieseker不等式とprojectively flatな等号条件を得て、半安定層やtorusの有限商の特徴づけへ応用する。
abstract_source_url: "https://arxiv.org/abs/2205.12305v4"
license_name: "arXiv non-exclusive distribution license"
license_url: "http://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2205.12305v4](https://arxiv.org/abs/2205.12305v4)
- **著者:** Xuemiao Chen
- **初回投稿日:** 2022年5月24日
- **最終更新日:** 2025年2月9日
- **主分類・副分類:** math.DG（主分類）, math.AG
- **ライセンス:** [arXiv non-exclusive distribution license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

滑らかなcompact Kähler多様体では、Donaldson–Uhlenbeck–Yau定理が安定正則ベクトル束とHermitian–Yang–Mills計量を結ぶ。正規多様体へ移ると、特異集合近傍でChern–Weil公式や層の延長を直接使えず、許容計量が層のslopeを計算することさえ自明ではない。

本論文は、正規多様体上の安定反射層に対する特異Donaldson–Uhlenbeck–Yau定理を、多重Kähler類が作るbalanced metricまで含めて証明する。存在だけでなくscaleを除く一意性を得て、対称冪、外冪、tensor積の反射的包絡がpolystableであることを導く。

さらに基礎空間が余次元2で滑らかなら、許容Hermitian–Yang–Mills接続からpolystable反射層を回復し、Hitchin–Kobayashi対応の逆向きも成立する。一般の正規多様体では、任意のKähler解消上で定義したdiscriminantを接続の曲率エネルギーが下から抑えるという形でBogomolov–Gieseker不等式を構成する。

この不等式は正規曲面や余次元2で滑らかな場合に簡約され、等号は正則部分上のprojective flatnessで特徴づけられる。半安定反射層にもfiltrationを通して拡張され、$c_1(X)=0$ のklt正規Kähler多様体がtorusの有限商となるための判定にも使われる。

## 背景と問題設定

$n$ 次元正規多様体 $X$ にKähler形式 $\omega_1,\ldots,\omega_{n-1}$ を取り、

$$
\omega^{n-1}=\omega_1\wedge\cdots\wedge\omega_{n-1}
$$

でbalanced metricを定める。反射層の安定性は解消 $p:\widehat X\to X$ 上の $(p^*\mathcal E)^{**}$ とpullbackされた多重偏極で定義される。従来の特異版では特異集合の余次元やambient metricに制約があり、一般の正規Kähler多様体ではcriticalな特異挙動を解析する必要があった。

もう一つの問題は、特異点がYang–Mills energyへ寄与し得るため、滑らかな場合のChern数をそのまま使ったBogomolov–Gieseker不等式が先験的には存在しないことである。本論文は、例外因子を縮める際のenergy lossを反映するよう、全Kähler解消と層の延長についてinfimumを取るdiscriminantを採用する。

## 主結果

### 特異Donaldson–Uhlenbeck–Yau定理（Theorem 1.1）

$(X,\omega_1\wedge\cdots\wedge\omega_{n-1})$ 上の安定反射層 $\mathcal E$ には許容Hermitian–Yang–Mills計量が存在し、scaleを除いて一意である。この結果は正規Kähler多様体を含み、多重偏極に関する安定性にも適用される。

### Hitchin–Kobayashi対応（Theorem 1.5）

$X$ が余次元2で滑らかなら、安定反射層の同型類と許容Hermitian–Yang–Mills接続のgauge同値類との一対一対応がある。接続から反射層を延長する段階にこの余次元条件が使われるため、一般の正規多様体に対する完全対応までは主張していない。

### Bogomolov–Gieseker不等式（Corollary 1.7）

rank $r$ の安定反射層 $\mathcal E$ とその許容Hermitian–Yang–Mills計量 $H$ に対し、Introductionで定義される解消上のdiscriminantは

$$
\Delta(\mathcal E)[\omega_{i_1}]\cdots[\omega_{i_{n-2}}]
\geq
\int_X\bigl(2r c_2(H)-(r-1)c_1(H)^2\bigr)\wedge
\omega_{i_1}\wedge\cdots\wedge\omega_{i_{n-2}}
\geq0
$$

を満たす。右端で等号なら $\mathcal E|_{X_{\mathrm{reg}}}$ はprojectively flatで、$\pi_1(X_{\mathrm{reg}})\to PU(r)$ の表現から定まる。

### 半安定層とtorus商（Theorem 1.14, Corollary 1.16）

半安定反射層にも $\Delta(\mathcal E)\geq0$ が成立し、ある解消上で等号なら、projectively flatな商をもつfiltrationが存在する。また $c_1(X)=0$ のcompact klt正規Kähler多様体について、接層を延長する解消上の層 $\widehat{\mathcal E}$ が $\Delta(\widehat{\mathcal E})[p^*\omega]^{n-2}=0$ を満たせば、$X$ は余次元1で自由に作用する有限群によるcomplex torusの商である。

## 証明の見取り図

解消上でKähler類を微小摂動し、滑らかなDonaldson–Uhlenbeck–Yau理論から得る接続のgauge理論的極限を調べる。特異集合へ近づく際の曲率、Sobolev評価、非零正則切断の極限を制御して、正規部分上の許容計量と一意性を得る。Bogomolov–Gieseker不等式では、多重Kähler類に対するHodge–Riemann性と、例外因子を縮める際にYang–Mills energyが失われ得るという半連続性を組み合わせ、解消上のdiscriminantが解析的曲率量を下から抑える。

## 原論文との対応

- **Abstractページ:** [arXiv:2205.12305v4](https://arxiv.org/abs/2205.12305v4)
- **Introduction:** Section 1, pp. 2–12
- **Introduction中で言及された主要定理番号:** Theorem 1.1, Theorem 1.5, Corollary 1.7, Theorem 1.14, Corollary 1.16
- **論文構成の説明:** Section 1.7, pp. 10–12
- **確認したarXivバージョン:** v4
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
