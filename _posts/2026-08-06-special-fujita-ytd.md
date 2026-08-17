---
layout: paper
title: "A solution to the Yau-Tian-Donaldson Conjecture through Special Fujita Approximations"
title_ja: "特殊Fujita近似によるYau--Tian--Donaldson予想の解決"
authors: "Antonio Trusiani"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
  - math.CV
  - math.DG
topic: algebraic-geometry
tags:
  - positivity
  - k-stability
arxiv_id: "2605.30063v1"
arxiv_url: "https://arxiv.org/abs/2605.30063v1"
arxiv_submitted: "2026-05-28"
arxiv_updated: "2026-05-28"
summary: >-
  big line bundleの体積だけでなく第1 Riemann--Roch係数も近似する特殊Fujita近似の存在を証明する。これにより非Archimedes的entropyの正則化予想を解き、滑らかな偏極射影多様体のcscK計量の存在と自己同型群に相対的な一様K安定性の同値を導く。
abstract_en: ""
summary_en: >-
  The paper strengthens Fujita approximation for a big line bundle by simultaneously controlling its volume and first Riemann--Roch coefficient on higher birational models. This special approximation provides continuity of the non-Archimedean entropy when big models are approximated by ample test configurations. Combined with earlier variational and non-Archimedean results, it yields the uniform Yau--Tian--Donaldson correspondence for smooth polarized projective varieties. The method also extends to weighted relative stability and extremal Kähler metrics.
abstract_ja: >-
  滑らかな射影多様体上の任意のbig line bundleについて、体積と第1 Riemann--Roch係数をともに高次モデル上のampleな有理直線束で近似できることを示す。この特殊Fujita近似により、非Archimedes的entropyに関するBoucksom--Jonsson正則化予想を解決する。既存の変分理論と組み合わせ、滑らかな偏極射影多様体がcscK計量を持つことと、自己同型群に相対的な一様K安定性が同値であることを導く。
abstract_source_url: "https://arxiv.org/abs/2605.30063v1"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2605.30063v1](https://arxiv.org/abs/2605.30063v1)
- **著者:** Antonio Trusiani
- **初回投稿日・最終更新日:** 2026年5月28日
- **主分類・副分類:** math.AG（主分類）, math.CV, math.DG
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

Yau--Tian--Donaldson（YTD）予想は、偏極多様体における定スカラー曲率Kähler（cscK）計量の存在を代数的なK安定性で特徴づけようとする。本論文は滑らかな一般偏極の場合に、$\operatorname{Aut}^\circ(X,L)$-一様K安定性との同値を得る。

中心となる新結果はFujita近似の精密化である。古典的近似はbig line bundleの体積をampleな有理直線束で近似するが、ここでは標準因子との交点数、すなわち第1 Riemann--Roch係数も同時に収束させる。

この追加の収束はbig test configurationの非Archimedes的entropyをample test configurationのentropyで近似するためにちょうど必要であり、Boucksom--Jonsson正則化予想を解決する。それによって通常の一様K安定性と「modelsに対する」強い安定性との隔たりを埋め、既存のMabuchi汎関数の強圧性・cscK存在理論へ接続する。

## 背景と問題設定

自己同型がある場合、積test configurationがDonaldson--Futaki不変量を消してしまうため、安定性は自己同型群によるtwistを差し引いた相対的一様性として定式化される。従来、非Archimedes的完備化の全要素やbig modelを含む強い安定性からcscK存在を導けたが、ample test configurationだけを検査する通常の定義との同値が正則化問題に阻まれていた。

## 主結果

### Yau--Tian--Donaldson対応（Theorem A）

$L\to X$ を滑らかな射影多様体上のample line bundleとする。このとき次は同値である。

1. $c_1(L)$ にcscK計量が存在する。
2. $(X,L)$ は $\operatorname{Aut}^\circ(X,L)$-一様K安定である。

とくに $\operatorname{Aut}^\circ(X,L)$ が自明なら、cscK計量の一意存在と一様K安定性が同値になる。

### 特殊Fujita近似（Theorem B）

$L$ を滑らかな $n$ 次元射影多様体 $X$ 上のbig line bundleとする。双有理射 $p_k:Y_k\to X$、ampleな $\mathbf Q$-line bundle $L_k$、有効 $\mathbf Q$-因子 $E_k$ を

$$p_k^*L=L_k+E_k,$$

$$L_k^n\longrightarrow\operatorname{Vol}(L),$$

$$L_k^{n-1}\cdot K_{Y_k}\longrightarrow\langle L^{n-1}\rangle\cdot K_X$$

となるように取れる。還元的群 $G$ による線形化があれば、データも $G$-equivariantに選べる。第3の収束が古典的Fujita近似に加わる新規点である。

### 非Archimedes的entropyの正則化（Corollary A）

支配的でsimple normal crossingな $G$-equivariant modelは、それを支配する滑らかなample test configuration列で近似でき、非Archimedes的entropyも

$$H^{\mathrm{NA}}(\mathcal X_k,\mathcal L_k)\longrightarrow H^{\mathrm{NA}}(\mathcal X,\mathcal L)$$

と収束する。これがTheorem Aへ至る正則化の橋である。

### weighted relative版（Theorem C）

正の重み $(v,w)$ について、weighted relative Mabuchi汎関数の $T^{\mathbf C}$-強圧性と $T^{\mathbf C}$-一様weighted relative K安定性が同値である。$v$ がlog-concaveなら、これはweighted extremal Kähler計量の存在とも同値になる。

## 証明の見取り図

近似データを固定多様体 $X$ 上の解析特異点を持つ $\theta$-psh関数として符号化する。normalized blow-upに対するdiscrepancyをmultiplier idealで評価し、相対標準因子との交点数を非pluripolar積へ読み替える。適切なbase ideal列とorthogonality estimateにより誤差を0へ収束させ、Theorem Bを得る。これをbig modelへ適用するとentropy正則化が従い、既存の「modelsに対する安定性からMabuchi強圧性、さらにcscK存在へ」という結果と連結してTheorem Aを得る。

## 原論文との対応

- **Abstractページ:** [arXiv:2605.30063v1](https://arxiv.org/abs/2605.30063v1)
- **Introduction:** Section 1, pp. 1–7
- **主要結果:** Theorems A–C, Corollaries A–B
- **確認したarXivバージョン:** v1
- **source_scope:** Abstract and Introduction
