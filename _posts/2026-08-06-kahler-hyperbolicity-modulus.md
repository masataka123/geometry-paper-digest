---
layout: paper
title: "Kähler Hyperbolicity Modulus for Simply-connected Kähler Hyperbolic manifolds"
title_ja: "単連結Kähler双曲多様体のKähler双曲性モジュラス"
authors: "Young-Jun Choi, Kang-Hyurk Lee"
arxiv_primary_category: "math.CV"
arxiv_categories:
  - math.CV
  - math.DG
arxiv_abstract: >-
  This paper investigates the Kähler hyperbolicity modulus on complete Kähler manifolds, with a
  particular focus on hyperconvex domains and bounded strongly pseudoconvex domains. Our main result
  establishes a lower bound for the Kähler hyperbolicity modulus in terms of the boundary behavior of
  the gradient length of a plurisubharmonic function. As applications, we compute the Kähler
  hyperbolicity modulus for bounded symmetric domains. Furthermore, we obtain lower bounds for the
  Kähler hyperbolicity modulus on bounded strongly pseudoconvex domains equipped with Kähler-Einstein
  metrics or Bergman metrics.
topic: several-complex-variables
tags:
  - hyperbolicity
arxiv_id: "2606.13569v1"
arxiv_url: "https://arxiv.org/abs/2606.13569v1"
arxiv_submitted: "2026-06-11"
arxiv_updated: "2026-06-11"
summary: >-
  完備Kähler多様体のKähler形式を有界な1形式の外微分として表す際、原始形式の最小ノルムを双曲性の強さとして定量化する。単連結性と大域的多重劣調和消尽関数を仮定し、その勾配の境界挙動から下界を与え、有界対称領域や強擬凸領域へ応用する。
abstract_en: ""
summary_en: >-
  This paper studies a quantitative invariant obtained by minimizing the uniform norm of primitives of a Kähler form. For simply connected complete Kähler manifolds with a global plurisubharmonic exhaustion, boundary gradient behavior yields a lower estimate for this invariant. The method determines the value on bounded symmetric domains and supplies estimates for strongly pseudoconvex domains with Kähler--Einstein or Bergman metrics.
abstract_ja: >-
  完備Kähler多様体上で、Kähler形式の有界な原始1形式がどれほど小さくなり得るかを測るKähler双曲性モジュラスを調べる。多重劣調和消尽関数の勾配長の境界挙動からモジュラスの下界を導き、有界対称領域では値を計算する。さらにKähler–Einstein計量またはBergman計量を備えた有界強擬凸領域にも下界を与える。
abstract_source_url: "https://arxiv.org/abs/2606.13569v1"
license_name: "arXiv non-exclusive distribution license"
license_url: "http://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2606.13569v1](https://arxiv.org/abs/2606.13569v1)
- **著者:** Young-Jun Choi, Kang-Hyurk Lee
- **初回投稿日:** 2026年6月11日
- **最終更新日:** 2026年6月11日
- **主分類・副分類:** math.CV（主分類）, math.DG
- **ライセンス:** [arXiv non-exclusive distribution license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

Kähler双曲多様体ではKähler形式 $\omega$ が有界な1形式 $\eta$ の外微分 $d\eta$ になる。この条件は $L^2$ Lefschetz型消滅やHodge Laplacianのスペクトル下界をもたらすが、選んだ原始形式のノルムだけでは多様体固有の尺度にならない。

本論文はそこで、すべての原始形式にわたる最小値

$$
M(X,\omega)=\inf\{\|\eta\|_{L^\infty}^2\mid d\eta=\omega\}
$$

をKähler双曲性モジュラスと呼ぶ。Introductionでは、単連結完備Kähler多様体に大域的多重劣調和消尽関数があるとき、その勾配長の無限遠での挙動が $M$ の下界を制御するという主結果の方針が述べられる。

応用として、有界対称領域ではモジュラスを具体的に決定し、有界強擬凸領域のKähler–Einstein計量とBergman計量には幾何学的下界を与える。したがって、スペクトルの直接計算が難しい状況でも、境界近傍のポテンシャルから双曲性の強さを評価できる。

## 背景と問題設定

GromovのKähler双曲性から、複素次元 $n$ の場合には中間次数以外の $L^2$ 調和形式が消え、関数に対するLaplacianのスペクトル底 $\lambda_0$ は

$$
\lambda_0\geq \frac{n^2}{4\|\eta\|_{L^\infty}^2},
\qquad
\lambda_0\geq \frac{n^2}{4M(X,\omega)}
$$

と評価される。単位球の標準完備Kähler–Einstein計量では $M=1/2$ となり、この評価は等号を達成する。一般には原始形式の構成も $\lambda_0$ の計算も難しいため、ポテンシャルの境界挙動を利用するのが論文の着想である。

## 主結果

Introductionでは主結果は概略として次のように述べられている。単連結完備Kähler多様体で $\omega=dd^c g$ を満たす大域的多重劣調和消尽関数 $g$ があるとき、無限遠における $|d^c g|_\omega^2$ の下限から、任意の $d\eta=\omega$ に対する $\|\eta\|_{L^\infty}^2$、したがって $M(X,\omega)$ の下界が得られる。

この原理は単位球に限らず、有界対称領域の不変計量に適用される。また、有界強擬凸領域では定義関数から作るポテンシャルの境界漸近を通じ、Kähler–Einstein計量とBergman計量のモジュラスを下から評価する。

## 証明の見取り図

Introductionが示す核心は、二つの原始形式の差が閉形式であり、単連結性から完全形式になる点である。消尽関数のコンパクトなレベル集合上でその原始関数の最大点を選ぶと、Lagrange乗数法とHermite直交性により、任意の原始形式の長さを $d^c g$ の長さで下から抑えられる。応用では各領域の標準ポテンシャルの境界勾配を計算する。

## 原論文との対応

- **Abstractページ:** [arXiv:2606.13569v1](https://arxiv.org/abs/2606.13569v1)
- **Introduction:** Section 1, pp. 1–3
- **Introduction中で言及された主要定理番号:** 主定理はSection 2に置くとの説明（Introductionでは概略）
- **論文構成の説明:** Introduction末尾からSection 2への導入
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
