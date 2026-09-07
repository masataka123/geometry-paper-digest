---
layout: paper
title: "Analytic Bertini theorem"
title_ja: "解析的Bertini定理"
authors: "Mingchen Xia"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
  - math.CV
  - math.DG
arxiv_abstract: >-
  We prove an analytic Bertini theorem, generalizing a previous result of Fujino and Matsumura.
topic: algebraic-geometry
tags:
  - multiplier-ideals-extension
  - pluripotential-theory
arxiv_id: "2110.14971v2"
arxiv_url: "https://arxiv.org/abs/2110.14971"
arxiv_submitted: "2021-10-28"
arxiv_updated: "2022-07-27"
summary: >-
  準多重劣調和関数の乗数イデアルが一般超平面への制限と可換する範囲を解析的に精密化する。例外超平面全体がpluripolar集合に含まれることを示し、従来の稠密性・零測度性を強めるとともに、可算個の準psh関数へ同時適用できる形を得る。
abstract_en: >-
  We prove an analytic Bertini theorem, generalizing a previous result of Fujino and Matsumura.
summary_en: ""
abstract_ja: >-
  Fujino–Matsumuraの先行結果を一般化する解析的Bertini定理を証明する。
abstract_source_url: "https://arxiv.org/abs/2110.14971"
license_name: "Creative Commons Attribution 4.0 International"
license_url: "http://creativecommons.org/licenses/by/4.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2110.14971](https://arxiv.org/abs/2110.14971)
- **著者:** Mingchen Xia
- **初回投稿日:** 2021年10月28日
- **最終更新日:** 2022年7月27日
- **主分類・副分類:** math.AG（主分類）, math.CV, math.DG
- **ライセンス:** [Creative Commons Attribution 4.0 International](http://creativecommons.org/licenses/by/4.0/)

## 要約

古典的Bertini定理は、基点を持たない線形系の一般元が滑らかであることをいう。本論文はこれに準多重劣調和関数 $\varphi$ の特異性を加え、乗数イデアル層の制限が一般超平面でどの程度よく振る舞うかを問う。

Ohsawa–Takegoshiの $L^2$ 拡張定理から、一方の包含 $\mathcal I(\varphi|_H)\subseteq\mathcal I(\varphi)|_H$ は一般の $H$ で知られている。しかし等号が失敗する超平面は、一般には真のZariski閉集合の可算和にも収まらないため、代数幾何的な「一般」だけでは捉えきれない。

主定理は、失敗集合がpluripolar集合に含まれることを示す。これは複素位相での稠密性やLebesgue零測度という先行結果を、多重ポテンシャル論に自然な小集合の概念で精密化したものである。既知の例から、この結論は本質的に最適と位置づけられる。

例外集合の可算和もpluripolarであるため、可算個の準psh関数と全ての正実数倍に同時適用できる。この点はpsh特異性を次元について帰納的に調べる際の利点となる。

## 背景と問題設定

連結射影多様体 $X$、基点なし線形系 $\Lambda$、準psh関数 $\varphi$ に対し、中心となる等式は

$$
\mathcal I(\varphi|_H)=\mathcal I(\varphi)|_H
$$

である。問題は、これが成立しない $H\in\Lambda$ の集合をどの小ささで評価できるかである。pluripolar集合とは局所的に多重劣調和関数の $-\infty$ 集合に含まれる集合であり、本結果は「準いたるところ」で等式が成り立つと述べる。

## 主結果

### 解析的Bertini定理（Theorem 1.1）

$X$ を次元 $n\geq1$ の連結複素射影多様体、$\Lambda$ を基点なし線形系、$\varphi$ を準psh関数とする。このときpluripolar集合 $\Sigma\subseteq\Lambda$ が存在し、全ての $H\in\Lambda\setminus\Sigma$ について $H$ は滑らかで、

$$
\mathcal I(\varphi|_H)=\mathcal I(\varphi)|_H
$$

が成り立つ。

### 写像に関する一般化（Theorem 2.4）

射影多様体から射影空間への写像 $p:X\to\mathbb P^N$ に対しても、超平面の逆像が滑らかで制限等式を満たす超平面全体はco-pluripolarである。Theorem 1.1は基点なし線形系が定める写像へ適用して得られる。

### 可算族への同時適用（Corollary 2.10）

強開性定理とpluripolar集合の可算和に対する安定性により、準psh関数の全ての正実数倍 $k\varphi$ について同じ一般超平面を選べる。その際、制限等式に加えて対応する乗数イデアル層の短完全列も得られる。

## 証明の見取り図

超平面 $H$ と $H\cap X$ 上の点を普遍族 $\pi_1:U\to\Lambda$ にまとめる。十分ampleな線束を捻った大域切断の等式へ問題を還元し、$\pi_1$ の直像層にHodge計量を構成する。直像の正値性により、その行列式計量の特異集合はpluripolarである。一方、乗数イデアルの制限等式が失敗する点ではこの計量が特異になるため、失敗集合もpluripolar集合に含まれる。

## 原論文との対応

本記事はAbstractとIntroductionのTheorem 1.1、その一般化としてIntroductionが指すTheorem 2.4とCorollary 2.10、およびIntroductionと主定理直前の証明概略を扱った。後続の技術的証明は再構成していない。
