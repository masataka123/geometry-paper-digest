---
layout: paper
title: Regularity of solutions to complex Monge-Ampère equations in big classes
title_ja: ビッグな類の豊富軌跡におけるMonge–Ampère解の正則性
authors: Riley Guyett, Ryan Mc Gowan
arxiv_primary_category: math.CV
arxiv_categories:
- math.CV
- math.AP
- math.DG
arxiv_abstract: We study the non-pluripolar complex Monge-Ampère equation in an arbitrary big class on a compact Kähler manifold. Under a weighted Laplacian lower bound on the log density, we obtain local $C^{2,α}$ regularity on the part of the ample locus where the data satisfy the stated hypotheses. A second criterion based on a quasi-plurisubharmonic decomposition gives similar regularity. In particular, a smooth positive density gives a smooth solution on the ample locus. None of these regularity results require nefness of the background class, resolving positively a question of Dinew, Guedj, and Zeriahi.
topic: several-complex-variables
tags:
- monge-ampere-equations
- pluripotential-theory
- positivity
arxiv_id: 2611.23094v1
arxiv_url: https://arxiv.org/abs/2611.23094
arxiv_submitted: '2026-11-17'
arxiv_updated: '2026-11-17'
summary: コンパクトKähler多様体のビッグな類について、滑らかな正の密度を持つ非多重極Monge–Ampère方程式の解が豊富軌跡で滑らかになることを示す。対数密度が局所Hölder連続な場合にも、そのLaplacianの負の部分を制御することで二階微分の正則性を得る。
abstract_en: ''
summary_en: A big class may lack the positivity needed for the usual global second order estimate. The authors instead solve a sequence of boundary problems on the region where the class admits smooth positive representatives locally. They recover interior regularity for the global weak solution under two alternative controls on the density.
abstract_ja: ビッグであってもnefではない類では、大域的な正値性が不足し、弱解を構成できてもその二階微分の評価が難しい。著者らは豊富軌跡を領域で尽くし、境界データを制御して局所一様楕円性を得る。滑らかな正の体積形式に対する結果は、Fujiki類に関するDinew–Guedj–Zeriahiの問いにも答える。
abstract_source_url: https://arxiv.org/abs/2611.23094
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2611.23094v1](https://arxiv.org/abs/2611.23094)
- **著者:** Riley Guyett, Ryan Mc Gowan
- **初回投稿日:** 2026-11-17
- **最終更新日:** 2026-11-17
- **主分類・副分類:** math.CV（主分類）; math.AP, math.DG
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

滑らかな体積形式を指定しても、背景のコホモロジー類がビッグであるだけなら、解は多様体全体で滑らかとは限らない。そこで問うべき領域は、類の中のKählerカレントが滑らかになり得る豊富軌跡である。

既存の理論は弱解の存在と定数を除く一意性を与える。nef性を追加すれば豊富軌跡での滑らかさも知られていたが、一般のビッグな類では滑らかな密度に対しても局所Hölder正則性から先へ進む評価が課題だった。

著者らは特異集合からの距離に応じた評価でこの差を埋める。結果は滑らかな密度の場合を含み、さらに密度自体の正則性が有限であるとき、解の二階微分にどの程度の連続性が残るかを記述する。

## 背景と問題設定

滑らかな閉実 $(1,1)$ 形式 $\theta$ が表すビッグな類で、質量が $\operatorname{Vol}([\theta])$ となる密度 $f$ を指定する。方程式の左辺は特異なポテンシャルを許す非多重極積である。

## 主結果

### 局所二階正則性（Theorem 1.1）

$U=X\setminus Z\subset\operatorname{Amp}(\theta)$ とし、真の解析集合 $Z$ にちょうど解析的特異点を持つKählerカレントのポテンシャル $\psi\le-1$ を仮定する。これは $U$ で滑らかで、対数解消上では正規交差型の対数部分と滑らかな剰余を持つ。$f\ge0$ は $L^p$（$p>1$）に属し、$U$ で正、$F=\log f$ はそこで局所 $C^{0,\beta}$ とする。

局所的な正則性を与える条件は二通りある。一つは分布の意味で $\Delta\_\omega F\ge-C e^{-B\psi}$ となること、もう一つは $F=F\_+-F\_-$ と分解され、両成分が一様な上界と $i\partial\bar\partial F\_\pm\ge-C\_0\omega$ を持つ準多重劣調和関数で、$F\_-$ が局所有界となることである。いずれかのもとで

$$
\langle(\theta+i\partial\bar\partial\varphi)^n\rangle=e^F\omega^n
$$

の正規化解は、すべての $0<\alpha<\beta$ に対し $C^{2,\alpha}\_{\mathrm{loc}}(U)$ に属する。

### 滑らかな体積形式（Corollary 1.1）

$F$ が全体で滑らかで $\int\_Xe^F\omega^n=\operatorname{Vol}([\theta])$ ならば、解は豊富軌跡全体で滑らかである。Kähler修正で体積形式を引き戻した際の対数Jacobianも第一の条件で扱え、Fujiki類の場合への帰着が可能になる。

## 証明の見取り図

特異ポテンシャルの上位集合で $U$ を尽くし、補助方程式の解をDemailly正則化とKiselman–Legendre変換で近似する。さらにRichberg型の平滑化で滑らかな狭義劣解を作り、これをDirichlet問題の境界値に使う。領域の形状に合わせた勾配・境界Hessian・内部トレースの評価を合わせると、コンパクト部分で楕円性が極限まで保たれる。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2611.23094)
- **Introduction:** [PDF](https://arxiv.org/pdf/2611.23094v1) — §1, pp. 1–4
- **Introduction中で言及された主要結果:** Theorem 1.1, Corollary 1.1, Question 21
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2611.23094v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
