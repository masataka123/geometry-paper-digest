---
layout: paper
title: Quasimonomial Monge--Ampère equations for big classes
title_ja: ビッグな類の非アルキメデスMonge–Ampère方程式と準単項的付値
authors: Rémi Reboulet, Yueqiao Wu
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
arxiv_abstract: Let X be a normal projective variety over an algebraically closed field of characteristic zero. We describe an alternative approach to a differentiability result of volumes of norms defined by finitely many quasimonomial valuations. As a consequence, we prove the non-Archimedean Calabi--Yau theorem for quasimonomial measures on $X$ with respect to big classes, in the trivially valued case. We also obtain continuity of solutions as numerical classes vary in the big cone. This extends previous results of Boucksom--Jonsson and Dervan--Reboulet, and gives the first uniqueness results in the big case. Our approach relies on convex geometry and Okounkov bodies, without involving non-Archimedean pluripotential theory or test configurations.
topic: algebraic-geometry
tags:
- monge-ampere-equations
- positivity
- pluripotential-theory
arxiv_id: 2611.24589v1
arxiv_url: https://arxiv.org/abs/2611.24589
arxiv_submitted: '2026-11-18'
arxiv_updated: '2026-11-18'
summary: 自明な絶対値を持つ標数零の代数閉体上の正規射影多様体で、有限個の準単項的付値に台を持つ確率測度を扱う。任意のビッグな数値類について対応する非アルキメデスMonge–Ampère方程式の解が定数を除いて一意に存在する。
abstract_en: Let X be a normal projective variety over an algebraically closed field of characteristic zero. We describe an alternative approach to a differentiability result of volumes of norms defined by finitely many quasimonomial valuations. As a consequence, we prove the non-Archimedean Calabi--Yau theorem for quasimonomial measures on $X$ with respect to big classes, in the trivially valued case. We also obtain continuity of solutions as numerical classes vary in the big cone. This extends previous results of Boucksom--Jonsson and Dervan--Reboulet, and gives the first uniqueness results in the big case. Our approach relies on convex geometry and Okounkov bodies, without involving non-Archimedean pluripotential theory or test configurations.
summary_en: ''
abstract_ja: 偏極が豊富でない場合まで体積の微分を延長し、準単項的測度とノルムの対応を与える。台を固定するとこの対応は同相となり、測度とビッグな数値類を同時に動かしたときの連続性も得られる。
abstract_source_url: https://arxiv.org/abs/2611.24589
license_name: Creative Commons Attribution 4.0 International (CC BY 4.0)
license_url: http://creativecommons.org/licenses/by/4.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2611.24589v1](https://arxiv.org/abs/2611.24589)
- **著者:** Rémi Reboulet, Yueqiao Wu
- **初回投稿日:** 2026-11-18
- **最終更新日:** 2026-11-18
- **主分類・副分類:** math.AG（主分類）; 副分類なし
- **ライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)

## 要約

有限個の付値に質量を配分したとき、その分布をMonge–Ampère測度として実現するノルムを求めたい。豊富な偏極で知られていたこの対応を、著者らはビッグな錐の内部全体に拡張する。

そのため、線束ごとに別々の空間で議論する代わりに、付値の有限集合と各付値への実数の割り当てを共通のデータにする。体積を割り当ての関数とみると、各偏微分がその点に置くべき質量を与える。

方程式の解は存在するだけでなく、定数の加算を同一視すると一意になる。類を動かせることにより、異なる数値類の方程式の解を比較できる。

## 背景と問題設定

$X$ は標数零の代数閉体上の正規射影多様体で、基礎体の付値は自明とする。有限集合 $\Sigma=\lbrace v\_1,\dots,v\_d\rbrace $ と重み $t\in\mathbb R^d$ によって付値を平行移動して最小を取り、切断環にノルムを定める。実数類では擬距離が零となるデータを同一視してノルム空間を定義する。

## 主結果

### 体積の微分（Theorem A）

$\Sigma$ を固定した体積 $\operatorname{vol}(\theta;\Sigma,t)$ は、$t$ を固定すればビッグな類 $\theta$ について連続、$\theta$ を固定すれば $t$ について $C^1$ 級である。Monge–Ampère測度は

$$
\operatorname{MA}\_{\theta}(\Sigma,t)=\sum\_{i=1}^{d}\frac{\partial\operatorname{vol}(\theta;\Sigma,t)}{\partial t\_i}\thinspace \delta\_{v\_i}
$$

で与えられる。

### 存在と一意性（Theorem B）

任意のビッグな実数値類で、準単項的ノルムを定数の加算で割った空間と有限個の準単項的付値に台を持つ確率測度の空間との間に全単射

$$
\operatorname{MA}\_\theta:N^{\rm qm}(\theta)/\mathbb R\longrightarrow M^{\rm qm}
$$

がある。$\Sigma$ で定まる部分空間では、商距離 $d\_1$ と質量の標準単体のEuclid位相に関して同相となる。

### 数値類を変えたときの連続性（Theorem C）

$\theta\_k\to\theta$ はすべてビッグとし、同じ有限の台 $\Sigma$ を持つ測度 $\mu\_k$ が同じ台の $\mu$ に弱収束するとする。対応する解 $t\_k$ は、極限の類の商擬距離 $d\_{1,\theta}$ で $\mu$ の解に収束する。

## 証明の見取り図

フィルター付きOkounkov体の切片の体積で勾配を記述する。存在は有限次元の変分問題で最大値が達成されることから導き、一意性にはOkounkov体の凸性とBrunn–Minkowski不等式を用いる。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2611.24589)
- **Introduction:** [PDF](https://arxiv.org/pdf/2611.24589v1) — Introduction, pp. 1–5
- **Introduction中で言及された主要結果:** Theorems A, B, C
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2611.24589v1
- **確認したライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)
- **source\_scope:** Abstract and Introduction
