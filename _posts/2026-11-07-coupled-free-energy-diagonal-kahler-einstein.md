---
layout: paper
title: Coupled free energy and a diagonal approach to coupled Kähler-Einstein metrics
title_ja: 結合自由エネルギーと対角部分による結合Kähler–Einstein計量の判定
authors: Takahiro Aoi, Satoshi Nakamura
arxiv_primary_category: math.DG
arxiv_categories:
- math.DG
arxiv_abstract: In this paper, we introduce the coupled free energy $F_{-\gamma}^{\rm cp}$ which is a natural generalization of the free energy functional defined by Berman. In the Fano case, our coupled free energy provides a diagonal approach to the coercivity of the coupled Ding functional. We also define the non-Archimedean coupled free energy $F_{-\gamma}^{\rm cp,NA}$ on the space of finite energy measures on the Berkovich analytification. As a consequence of the regularization process of the non-Archimedean entropy established by Boucksom-Jonsson, Chi Li and Trusiani, we prove that the existence of a unique coupled K\"{a}hler-Einstein metric is equivalent to the stability condition that there exists $\epsilon >0$ such that $F_{-1-\epsilon}^{\rm cp,NA} \geq 0$ on the space of measures associated with a test configuration for the anticanonical line bundle. As a coupled version of the work by Berman, we show that the law of the empirical measure satisfies a large deviation principle whose
  rate function is the coupled free energy under the assumption that a conjecture by Hultgren is true. We also introduce a coupled version of the microscopic stability thresholds and prove that a uniformly coupled Gibbs stable Fano manifold has a unique coupled K\"{a}hler-Einstein metric. This is a generalization of the results by Fujita-Odaka and Berman.
topic: differential-geometry
tags:
- kahler-einstein-metrics
- k-stability
- fano-varieties
- pluripotential-theory
arxiv_id: 2611.06968v1
arxiv_url: https://arxiv.org/abs/2611.06968
arxiv_submitted: '2026-11-04'
arxiv_updated: '2026-11-04'
summary: 結合Kähler–Einstein計量の存在を、測度上の自由エネルギーとポテンシャルの対角部分に制限したDing汎関数から捉える。Fanoの場合には自己同型群が有限という仮定の下で解析的・非Archimedes的条件を対応させ、体積不等式や結合Gibbs安定性との関係も導く。
abstract_en: In this paper, we introduce the coupled free energy $F_{-\gamma}^{\rm cp}$ which is a natural generalization of the free energy functional defined by Berman. In the Fano case, our coupled free energy provides a diagonal approach to the coercivity of the coupled Ding functional. We also define the non-Archimedean coupled free energy $F_{-\gamma}^{\rm cp,NA}$ on the space of finite energy measures on the Berkovich analytification. As a consequence of the regularization process of the non-Archimedean entropy established by Boucksom-Jonsson, Chi Li and Trusiani, we prove that the existence of a unique coupled K\"{a}hler-Einstein metric is equivalent to the stability condition that there exists $\epsilon >0$ such that $F_{-1-\epsilon}^{\rm cp,NA} \geq 0$ on the space of measures associated with a test configuration for the anticanonical line bundle. As a coupled version of the work by Berman, we show that the law of the empirical measure satisfies a large deviation principle whose
  rate function is the coupled free energy under the assumption that a conjecture by Hultgren is true. We also introduce a coupled version of the microscopic stability thresholds and prove that a uniformly coupled Gibbs stable Fano manifold has a unique coupled K\"{a}hler-Einstein metric. This is a generalization of the results by Fujita-Odaka and Berman.
summary_en: ''
abstract_ja: 結合Kähler–Einstein方程式に対応する自由エネルギーを導入し、結合Ding汎関数を対角部分へ制限することで存在問題を調べる。Fanoの場合には自由エネルギーの強圧性と非Archimedes的な熱力学的K安定性を結び、結合体積の上界も得る。結合Gibbs安定性からの存在結果には各偏極の体積が等しいという条件を置く。正の標準束の場合の確率測度の集中は、相互漸近Fekete配置に関する予想を仮定した結果である。
abstract_source_url: https://arxiv.org/abs/2611.06968
license_name: Creative Commons Attribution 4.0 International (CC BY 4.0)
license_url: http://creativecommons.org/licenses/by/4.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2611.06968v1](https://arxiv.org/abs/2611.06968)
- **著者:** Takahiro Aoi, Satoshi Nakamura
- **初回投稿日:** 2026-11-04
- **最終更新日:** 2026-11-04
- **主分類・副分類:** math.DG（主分類）; 副分類なし
- **ライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)

## 要約

複数のKähler類に属する計量を、そのRicci形式が共通になるように連立させたものが結合Kähler–Einstein計量である。本論文は、この連立問題を確率測度上の一つの自由エネルギーによって記述し、存在判定と確率的構成を同じ枠組みで扱う。

中心となる工夫は、各ポテンシャルの正規化Monge–Ampère測度が一致する「対角部分」に注目することである。これは単に全ポテンシャルを同じ関数にする条件ではない。Fanoの場合、そこでのDing汎関数の強圧性が、全ポテンシャル空間での強圧性や測度上の自由エネルギーの強圧性と同値になる。

さらに、非Archimedes的自由エネルギーを用いた熱力学的K安定性を定義し、自己同型群が有限な場合には結合計量の存在・一意性を特徴づける。結合偏極の体積に対する上界や、等体積の場合の結合Gibbs安定性からの存在定理も、この理論の幾何学的・確率論的帰結である。

一方、標準束が正の場合の大偏差原理には、相互漸近Fekete配置の存在予想が必要になる。この条件付き結果と、Fano側の変分的存在判定は区別して読む必要がある。

## 背景と問題設定

射影多様体 $X$ 上で $\lambda K\_X=L\_1+\cdots+L\_m$ を豊富な有理直線束への分解とする。対応する結合方程式は

$$
\operatorname{Ric}\omega\_1=\cdots=\operatorname{Ric}\omega\_m=-\lambda^{-1}\sum\_{i=1}^m\omega\_i,
\qquad \omega\_i\in c\_1(L\_i)
$$

である。通常のKähler–Einstein理論における自由エネルギー、Ding汎関数、安定性の関係を、互いに異なる複数の偏極をもつ状況へ移すことが課題となる。

結合エネルギー $E^{\mathrm{cp}}$ と基準体積形式に対するエントロピーを用いて

$$
F\_\beta^{\mathrm{cp}}(\mu)=\operatorname{Ent}\_{dV}(\mu)+\beta E^{\mathrm{cp}}(\mu)
$$

と置く。Fano側では $\beta=-\gamma<0$ を考える。対角部分 $\Delta$ は、各成分の正規化Monge–Ampère測度が等しい有限エネルギー・ポテンシャルの組からなる。

## 主結果

### 条件付きの確率的構成（Theorem 1.1、Corollary 1.2）

$K\_X=\sum\_i L\_i$ かつ各 $L\_i^n$ が等しい場合、Hultgrenの相互漸近Fekete配置に関するConjecture 3.16を仮定すると、$\beta>0$ の結合点過程の経験測度は、速度 $N$、率関数

$$
F\_\beta^{\mathrm{cp}}-\inf F\_\beta^{\mathrm{cp}}
$$

の大偏差原理を満たす。経験測度の分布は、唯一のtwisted結合Kähler–Einstein測度に対応するDirac測度へ収束する。平均した一点相関測度についても同じ極限が得られる。予想を仮定している点が、この結果の適用範囲を決める。

### 対角部分だけで強圧性を判定する（Theorem 1.3）

$-K\_X=\sum\_iL\_i$ の場合、任意の $\gamma>0$ に対し、$F\_{-\gamma}^{\mathrm{cp}}$ の強圧性、結合Ding汎関数 $D\_{-\gamma}^{\mathrm{cp}}$ の全空間上での強圧性、その $\Delta$ への制限の強圧性は同値である。

それぞれは、ある $\varepsilon>0$ に対してパラメータを $-\gamma-\varepsilon$ にした対応する汎関数が下に有界であることとも同値になる。単なる有界性ではなく、パラメータを少し動かした有界性が存在判定に必要な量的強さを与える。

### 非Archimedes的な対角判定（Theorem 1.4）

同じ対応は非Archimedes的空間でも成り立つ。自由エネルギーについての一様下界

$$
F\_{-\gamma}^{\mathrm{cp,NA}}\geq\varepsilon E^{\mathrm{cp,NA}}
$$

は、全空間または非Archimedes的対角部分 $\Delta^{\mathrm{NA}}$ 上の

$$
D\_{-\gamma}^{\mathrm{cp,NA}}\geq\varepsilon J^{\mathrm{cp,NA}}
$$

と同値である。また、いずれもある正の $\varepsilon$ について $-\gamma-\varepsilon$ における対応する汎関数が非負であることに言い換えられる。各条件の定数は同じ値であることを要求しない。

### 有限自己同型群の下での存在の特徴づけ（Theorem 1.6）

$\operatorname{Aut}(X)$ が有限であるとき、唯一の結合Kähler–Einstein計量が存在することは、$F\_{-1}^{\mathrm{cp}}$ の強圧性、および確率測度の弱位相に関するその下半連続性と同値になる。さらに熱力学的K安定性、すなわちある $\varepsilon>0$ について

$$
F\_{-1-\varepsilon}^{\mathrm{cp,NA}}\geq0
$$

となることとも同値である。この判定には、$-K\_X$ のテスト配置から得られる非Archimedes的Monge–Ampère測度を用いる形もある。自己同型群が有限という仮定を外した一般の一意性定理ではない。

### 結合体積の上界と等号条件（Theorem 1.7）

$F\_{-1}^{\mathrm{cp,NA}}\geq0$ ならば

$$
\sum\_{i=1}^m (L\_i^n)^{1/n}\leq n+1
$$

が成り立つ。さらに $(-K\_X)^n\leq(n+1)^n$ を仮定すると、等号成立は $X\simeq\mathbb P^n$ かつ各 $L\_i=\mathcal O(k\_i)$ であることと同値になる。後者の追加体積条件を省いた無条件の等号分類ではない。

### 結合Gibbs安定性からの存在（Theorem 1.11、Corollary 1.12）

各 $L\_i^n$ が等しい場合には、結合点過程の分配関数の可積分性閾値から $\gamma^{\mathrm{cp}}$ を定めることができる。Theorem 1.11は有限粒子数の対数分配関数を自由エネルギーで制御する解析的不等式を与え、その帰結として

$$
\delta^{\mathrm{cp}}\geq\gamma^{\mathrm{cp}},\qquad
\gamma^{\mathrm{cp}}>1\ \Longrightarrow\ \text{唯一の結合Kähler–Einstein計量が存在する}
$$

を得る。等体積仮定は確率モデルの構成と結び付いており、一般の分解へそのまま拡張された主張ではない。

## 証明の見取り図

Introductionが説明する第一の段階は、結合エネルギーの双対性を利用して、測度上の最適化とポテンシャル上のDing汎関数を結ぶことである。共通のMonge–Ampère測度をもつ対角部分が、複数の成分の変分をまとめる役割を果たす。

Fano側では、この双対関係を非Archimedes的汎関数とエントロピーの近似へ移し、既存の変分的Kähler–Einstein理論を結合設定に適用する。体積上界にはFujita型の議論と体積の不等式を用いる。確率的存在結果では、有限次元の分配関数に対する評価から自由エネルギーの強圧性を導く。正の標準束の場合だけは、その前提となる相互Fekete配置の存在が予想として残る。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2611.06968)
- **Introduction:** [PDF](https://arxiv.org/pdf/2611.06968v1) — Section 1, pp. 2–9
- **Introduction中で言及された主要結果:** Theorems 1.1, 1.3, 1.4, 1.6, 1.7, 1.11; Corollaries 1.2, 1.12
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2611.06968v1
- **確認したライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)
- **source\_scope:** Abstract and Introduction
