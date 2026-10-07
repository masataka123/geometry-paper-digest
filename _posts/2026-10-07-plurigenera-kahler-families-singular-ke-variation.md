---
layout: paper
title: |-
  Psh variation of singular K\"ahler-Einstein metrics and Invariance of plurigenera for smooth K\"ahler families
title_ja: 滑らかなKähler族の多重種数不変性と特異KE計量の変動
authors: Yinji Li, Mihai Păun, Zhiwei Wang, Xiangyu Zhou
arxiv_primary_category: math.CV
arxiv_categories:
- math.CV
arxiv_abstract: |-
  Let $p:X\rightarrow\Delta$ be a proper holomorphic submersion whose total space $X$ is a K\"ahler manifold. We prove that $\dim_{\mathbb C}H^0(X_t,mK_{X_t})$ is independent of $t$ for every integer $m\geq1$. This was conjectured by Y.-T. Siu in 2002.
topic: several-complex-variables
tags:
- kahler-einstein-metrics
- minimal-model-program
- monge-ampere-equations
- l2-methods
- multiplier-ideals-extension
arxiv_id: 2610.07826v1
arxiv_url: https://arxiv.org/abs/2610.07826v1
arxiv_submitted: '2026-10-06'
arxiv_updated: '2026-10-06'
summary: |-
  全空間がKählerである円板上の滑らかな固有正則族について、各ファイバーの多重標準切断が全空間へ延長することを示す。全ての多重種数の不変性を導き、標準束のnef性を仮定していた従来のKähler族の結果を越えると主張する。
abstract_en: ''
summary_en: |-
  The central issue is how to extend canonical sections while a compact complex manifold varies in a Kähler family. The authors build a singular metric on the relative canonical bundle whose curvature is semipositive on the total space and whose restriction has controlled singularities. Their argument combines birational models with an entropy comparison for fiberwise Monge–Ampère solutions. This metric construction provides the integrability needed for an extension theorem and removes a nefness hypothesis from earlier work.
abstract_ja: |-
  円板への固有正則沈め込み $p:X\to\Delta$ で全空間 $X$ がKählerである場合に、各整数 $m\geq1$ について $\dim_{\mathbb C}H^0(X_t,mK_{X_t})$ がパラメーター $t$ に依存しないことを主張する。これはSiuが2002年に提起した、滑らかなKähler族における多重種数不変性の予想である。
abstract_source_url: https://arxiv.org/abs/2610.07826v1
license_name: arXiv non-exclusive distribution license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.07826v1](https://arxiv.org/abs/2610.07826v1)
- **著者:** Yinji Li, Mihai Păun, Zhiwei Wang, Xiangyu Zhou
- **初回投稿日:** 2026-10-06
- **最終更新日:** 2026-10-06
- **主分類・副分類:** math.CV（主分類）、副分類なし
- **ライセンス:** [arXiv non-exclusive distribution license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

多重種数は、多重標準束の正則切断がいくつ存在するかを測る双有理不変量である。複素構造を滑らかに変形したとき、この数が変わらないことは、複素多様体の分類と族の幾何にとって基本的である。射影的な族では既に知られていたが、一般のKähler族への拡張には別の困難が残っていた。

本論文は、円板上の固有正則沈め込みで全空間がKählerならば、任意のファイバーの任意の多重標準切断が全空間へ延長すると主張する。その帰結として、全ての次数の多重種数が一定となる。従来のKähler族の結果にあった、各ファイバーの標準束がnefであるという追加条件を取り除く点が主要な新規性である。

解析の中心は、特異なtwisted Kähler–Einstein計量をファイバーごとに作るだけでなく、それらが全空間上でも多重劣調和的に変動することを示す点にある。Kähler極小モデル理論、退化Monge–Ampère方程式の一様評価、Bergman核によるエントロピー比較を組み合わせ、最後に $L^2$ 延長定理を適用する。

## 背景と問題設定

対象は単位円板 $\Delta$ 上の固有正則沈め込み $p:X\to\Delta$ で、$X$ はKähler多様体である。$X_t=p^{-1}(t)$ と置き、

<div>
$$
P_m(X_t)=\dim_{\mathbb C}H^0(X_t,mK_{X_t}),\qquad m\geq1
$$
</div>

の変形不変性を問う。ここでは全空間のKähler性が仮定であり、単に個々のファイバーがKählerであるという別の条件に置き換えてはいない。

Introductionは、Siuによる射影族での結果、Kawamataの代数的証明、Păunのone-tower法、Takayamaの特異な代数族への拡張を振り返る。Kählerの場合にはLevine、Cao–Păunの無限小延長、さらに標準束がnefの場合の結果が先行する。本論文では、bigな随伴類の解が特異になり得るため、基底方向に方程式を微分する従来型の議論を直接使えないことが難点となる。

## 主結果

### 主定理1：多重標準切断の延長（Theorem 1.2＝Theorem 9.1）

任意の整数 $m\geq1$、任意の $t_0\in\Delta$、任意の
$s\in H^0(X_{t_0},mK_{X_{t_0}})$ に対し、

<div>
$$
\widetilde s\in H^0(X,mK_X),
\qquad \widetilde s|_{X_{t_0}}=s
$$
</div>

となる切断が存在する。制限の同一視には、円板の標準座標を使う。従って、$P_m(X_t)$ は $t$ に依存しない。

仮定は前述の滑らかな固有族と全空間のKähler性であり、ファイバーの標準束のnef性や射影性を追加しない。この結果はIntroductionのConjecture 1.1として掲げられたSiuの予想に答える。

### 主定理2：bigな随伴類の解の多重劣調和変動（Theorem 1.3）

$X$ 上のKähler形式 $\omega,\beta$ を取り、$\omega$ が $K_{X/\Delta}$ に誘導する計量の曲率を $\theta_\omega$ とし、$\alpha=\theta_\omega+\beta$ と置く。各ファイバー上で $[\alpha_t]$ がbigであると仮定すると、$\operatorname{vol}([\alpha_t])$ は $t$ に依存しない。

さらに、全Monge–Ampère質量を持つ一意な解 $\varphi_t\in\operatorname{PSH}(X_t,\alpha_t)$ を

<div>
$$
\left\langle(\alpha_t+dd^c\varphi_t)^n\right\rangle
=e^{\varphi_t}\beta_t^n
$$
</div>

で定めると、ファイバー上の解を合わせた関数 $\varphi(x)=\varphi_{p(x)}(x)$ は

<div>
$$
\varphi\in\operatorname{PSH}(X,\alpha)
$$
</div>

を満たす。括弧は非多重極積を表し、論文の規約は $dd^c=\frac{i}{2\pi}\partial\bar\partial$ である。結論はファイバー内部の正値性だけでなく、基底方向も含めた全空間上の正値性である。

## 証明の見取り図

まず、$L^2$ 延長定理を適用するため、$K_{X/\Delta}$ 上に半正曲率を持ち、中心ファイバーで極小特異性を持つ特異Hermitian計量を作る。延長対象の切断ごとに異なる計量を選ぶのではなく、切断から独立した計量を構成する。

標準類に小さいKähler類を加えたbigな随伴類について、Kähler MMPが双有理モデルと正・負部分への分解を与える。これにより体積の一定性を得るが、全空間の正値性はまだ従わない。モデルが摂動パラメーターにも依存する点を扱う必要がある。

次に、twisted KEポテンシャルを境界値とするPerron包絡を考える。局所Bergman核によって測度の密度比の正部分を近似し、エントロピー比較を行う。因子的な誤差を交点数とFujita分解の直交性で制御して極限へ移ることで、包絡の比較原理からファイバー解の多重劣調和変動を導く。特異解を基底方向に直接微分しないことが重要である。

最後に、体積が零へ縮む場合も含めた一様評価と、基底に依存しない定数による正規化を用いて、極小特異性を持つ標準計量へ移る。Introductionが示す可積分性評価により $L^2$ 延長が可能となる。後続節の技術的証明をここで再構成・検証したわけではない。

## 原論文との対応

- **Abstractページ:** [arXiv:2610.07826v1](https://arxiv.org/abs/2610.07826v1)
- **Introduction:** Section 1、pp. 1–5。p. 5のSection 2開始前まで。
- **主要定理:** Theorem 1.2、Theorem 1.3。多重種数の予想はConjecture 1.1。
- **主要な式:** 多重種数の定義、式(1.3)。$dd^c$ の規約はp. 3。
- **論文構成:** p. 5。Sections 4–7がMMP・一様評価・変動、Sections 8–9が標準計量と延長を扱う。
- **確認バージョン:** v1。
- **確認ライセンス:** arXiv non-exclusive distribution license。
- **source_scope:** Abstract and Introduction。
