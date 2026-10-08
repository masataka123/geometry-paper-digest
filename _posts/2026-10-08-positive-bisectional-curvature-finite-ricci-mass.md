---
layout: paper
title: Positive bisectional curvature, Ricci mass, and the fundamental group
title_ja: 正の双正則断面曲率の下でのRicci質量と基本群の有限性
authors: Ved Datar, Vamsi Pritham Pingali, Harish Seshadri
arxiv_primary_category: math.DG
arxiv_categories:
- math.DG
arxiv_abstract: |-
  We prove the finiteness of the integral of the top power of the Ricci form on a complete, noncompact K\"ahler manifold with positive bisectional curvature. This settles a special case of a conjecture of Yau and Yang. An immediate corollary is the finiteness of the fundamental group of such manifolds. As in our previous work, the main idea involves the construction and use of plurisubharmonic weight functions with finite Monge-Amp\`ere masses.
topic: differential-geometry
tags:
- noncompact-kahler-geometry
- curvature
- fundamental-groups
- pluripotential-theory
- monge-ampere-equations
arxiv_id: 2610.09989v1
arxiv_url: https://arxiv.org/abs/2610.09989v1
arxiv_submitted: '2026-10-07'
arxiv_updated: '2026-10-07'
summary: |-
  正の正則双断面曲率を持つ完全非コンパクトKähler多様体について、Ricci形式の最高冪の積分が有限であることを示す。有限で正のMonge–Ampère質量を持つLipschitz多重劣調和関数を構成し、基本群の有限性を導く。単連結性や全次元の一意化までは本論文の定理ではない。
abstract_en: |-
  We prove the finiteness of the integral of the top power of the Ricci form on a complete, noncompact K\"ahler manifold with positive bisectional curvature. This settles a special case of a conjecture of Yau and Yang. An immediate corollary is the finiteness of the fundamental group of such manifolds. As in our previous work, the main idea involves the construction and use of plurisubharmonic weight functions with finite Monge-Amp\`ere masses.
summary_en: ''
abstract_ja: |-
  正の双正則断面曲率を持つ完全非コンパクトKähler多様体では、Ricci形式の最高冪の積分が有限であることを証明する。これはYauとYangの予想の特別な場合を解決するものであり、直接の帰結としてそのような多様体の基本群は有限となる。主な着想は、著者らの先行研究と同様に、有限なMonge–Ampère質量を持つ多重劣調和な重み関数を構成して利用することである。
abstract_source_url: https://arxiv.org/abs/2610.09989v1
license_name: CC BY 4.0
license_url: http://creativecommons.org/licenses/by/4.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.09989v1](https://arxiv.org/abs/2610.09989v1)
- **著者:** Ved Datar, Vamsi Pritham Pingali, Harish Seshadri
- **初回投稿日:** 2026-10-07
- **最終更新日:** 2026-10-07
- **主分類・副分類:** math.DG（主分類）、副分類なし
- **ライセンス:** [CC BY 4.0](http://creativecommons.org/licenses/by/4.0/)

## 要約

完全非コンパクトKähler多様体の曲率に正値性を仮定したとき、その無限遠の幾何と位相をどこまで制御できるかを考える。Yauの予想に動機づけられたYangの問いは、非負Ricci曲率の下でRicci形式の最高冪の積分が有限になるかというものである。

著者らは、この有限性を正の正則双断面曲率の下で証明する。先行研究が用いていた正の断面曲率という条件から、Kähler幾何に固有の双断面曲率の条件へ範囲を広げる結果である。非負Ricci曲率だけの場合の一般問題を解決したとは述べていない。

Ricci質量が有限であることから、基本群も有限になる。解析的な鍵は、有限で正のMonge–Ampère質量を持つ大域的Lipschitz多重劣調和関数である。この関数を、Monge–Ampère方程式の一様楕円的な近似を通じて作る。

## 背景と問題設定

$(X,\omega)$を複素次元$n$の完全非コンパクトKähler多様体とし、正の正則双断面曲率を$\mathrm{BK}>0$と表す。注目する量は

<div>
$$
\int_X\operatorname{Ric}_\omega^{,n}
$$
</div>

である。論文はRicci形式の最高冪を積分する量を扱っており、単なるRiemann体積の有限性を主張するものではない。

Introductionでは、$\mathrm{BK}>0$なら$X$は$\mathbb C^n$と双正則であるというYauの一意化予想を背景として挙げる。今回の基本群の有限性はその方向の結果だが、単連結性とは区別される。

## 主結果

### Ricci質量の有限性（Theorem 1.1）

完全非コンパクトKähler多様体$(X,\omega)$が$\mathrm{BK}>0$を満たせば、

<div>
$$
\int_X\operatorname{Ric}_\omega^{,n}\lt \infty
$$
</div>

となる。Introductionに記された主定理には、最大体積増大や曲率上界といった追加仮定はない。

### 基本群の有限性（Theorem 1.2）

同じ仮定の下で$\pi_1(X)$は有限である。無限基本群を仮定して普遍被覆へ移ると、引き戻した正のRicci質量が無限のシートにわたって積み重なり、Theorem 1.1と矛盾するという帰結である。

特に$\mathbb C\times\mathbb C^\ast$は、正の双断面曲率を持つ完全Kähler計量を許さない。一方、この定理だけから基本群が自明であるとはいえない。

### 有限Monge–Ampère質量の重み（Theorem 1.3）

同じ幾何的仮定の下で、大域的なLipschitz多重劣調和関数$\varphi$が存在し、

<div>
$$
\operatorname{Lip}(\varphi)\le1,
\qquad
0\lt \int_X(dd^c\varphi)^n\lt \infty
$$
</div>

を満たす。Monge–Ampère積はBedford–Taylorの意味で解釈する。IntroductionのProposition 1.1は、このような関数の存在からRicci質量の有限性が従うという先行研究の結果であり、新しい構成がその仮定を満たす。

## 証明の見取り図

従来は正の断面曲率を使って滑らかな強多重劣調和exhaustionを得ていた。その関数がMonge–Ampère方程式の障壁や境界での勾配評価を支えていたため、曲率仮定を弱める際の制約となっていた。

今回の方針は、退化したMonge–Ampère方程式をtruncated Bellman作用素による一様楕円方程式で近似することである。Introductionは、この近似が従来の強い境界・障壁条件を避けるための新しい入力であると説明する。得られた重みを既知のRicci質量判定へつなげる。

Introductionにある複素次元2の一意化に関する記述は執筆中の別研究の予定であり、この論文のTheorems 1.1–1.3の結論には含めない。

## 原論文との対応

- **Abstractページ:** [arXiv:2610.09989v1](https://arxiv.org/abs/2610.09989v1)
- **Introduction:** Section 1、pp. 1–2（謝辞等はp. 3）。
- **主結果:** Theorems 1.1–1.3。Proposition 1.1は先行研究からの入力。
- **論文構成:** Introductionは、有限質量の重みの構成を経てRicci質量と基本群へ進む流れを示す。後続節の証明詳細は確認範囲に含めない。
- **確認バージョン:** v1。
- **確認ライセンス:** CC BY 4.0。
- **source_scope:** Abstract and Introduction。
